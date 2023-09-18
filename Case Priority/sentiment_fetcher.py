import time
import json
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup
import requests
from sentiment_analyser import sentiment_analysis,preprocess_text,classify_sentiment

def fetch_news(path):

# Load keywords from a JSON file
       with open(path, 'r') as json_file:
           keywords = json.load(json_file)

# Initialize the WebDriver (provide the path to your WebDriver)
       driver = webdriver.Chrome(executable_path='/path/to/chromedriver')

# Perform a Google search for each keyword
       news_articles = []

       for keyword in keywords:
            try:
        # Open the Google search page
               driver.get('https://www.google.com')

        # Locate the search input element and enter the keyword
               search_box = driver.find_element(By.NAME, 'q')
               search_box.send_keys(keyword)
               search_box.send_keys(Keys.RETURN)

        # Wait for the search results to load
               time.sleep(3)

        # Retrieve the search results (news articles)
               search_results = driver.find_elements(By.XPATH, '//div[@class="tF2Cxc"]')

               for result in search_results:
                   title = result.find_element(By.XPATH, './/h3').text
                   link = result.find_element(By.XPATH, './/a').get_attribute('href')
                   article_content = ""
                   try:
                     response = requests.get(link)
                     soup = BeautifulSoup(response.text, 'html.parser')
                     paragraphs = soup.find_all('p')
                     article_content = ' '.join([p.get_text() for p in paragraphs])
                   except Exception as e:
                     print(f"Error fetching article content for '{title}': {str(e)}")

                   news_articles.append({"title": title, "link": link, "content": article_content})
                   

            except Exception as e:
                   print(f"Error searching for '{keyword}': {str(e)}")

# Quit the WebDriver
            driver.quit()

       #Sentiment Analysis
       sentiment_all_texts=[]
       for article in news_articles:
              title = article['title']
              content =article['content']  

    # Preprocess the content
              preprocessed_content = preprocess_text(content)

    # Perform sentiment analysis
              sentiment_scores = sentiment_analysis(preprocessed_content)
              text_sentiment=classify_sentiment(sentiment_scores)
              sentiment_all_texts.append(text_sentiment)
       count=0
       count_neg=0
       for i in sentiment_all_texts:
              if i=='Negative':
                     count+=1
                     count_neg+=1
              if i=='Positive':
                     count-=1
       overall_sentiment='Neutral'
       if(count>0):
              overall_sentiment='Negative'
       if(count<0):
              overall_sentiment='Positive' 
       return (len(news_articles),overall_sentiment,count_neg)
              


