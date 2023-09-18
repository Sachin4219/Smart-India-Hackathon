import json
import sentiment_fetcher
def score_case(data):
    # data is a json object here
            # this dictionary stores the weightage given to each case type. Higher value means higher weightage
            casetype_score={'Murder and Homicide Cases':39,'Theft and Robbery Cases':38,'Fraud and Financial Crimes':37,
                         'Assault and Battery Cases':36,
                         'Cybercrime Cases':35,'Domestic Violence Cases':34,'Child Custody Cases':33,
                        'Adoption Cases':32,'Guardianship Cases':31,
                        'Divorce Cases':30,'Matrimonial Disputes':29,'Maintenance Cases':28,
                        'Restitution Cases':27,'Succession Cases':26,'Fundamental Rights Cases':25,'Public Interest Litigation (PIL)':24,
                         'Pollution Control Cases':23,'Conservation Cases':22,'Custodial Death Cases':21,
                         'Illegal Detention Cases':20,'Discrimination Cases':19,'Bankruptcy and Insolvency Cases':18,
                        'Contractual Disputes':17,'Intellectual Property Disputes':16,'Income Tax Cases':15,
                        'Goods and Services Tax (GST) Cases':14,'Money Suits':13,'Property Suits':12,
                        'Commercial Suits':11,'Rent Suits':10,'Injunction Suits':9,'Specific Performance Suits':8,
                         'Partition Suits':7,'Declaration Suits':6,
                         'Intellectual Property Cases':5,'Consumer Cases':4,'Property Cases':3,
                          'Labor and Employment Cases':2,'Writ Petitions':1  }
            score=0.0
            casetype=data['casetype']
            score+=casetype_score[casetype]
            score+=data['Number of Parties']
            if data['Diversity of Interests between parties'] == 'Yes':
                  score += 1
            if data['Presence of Counter Claims'] == 'Yes':
                  score += 1
            score+=data['Party or Member of Party Deceased']
            score+=data['Number of Witnesses']
            score+=(-1)*data['Volume of Evidence']
            score+=data['Number of hearings held']
            score+=data['Critical Evidence']
            if data['Urgency by Parties']== 'Yes':
                  score+= 1
            score+=data['Financial Claims']/10000
            
            if data['Vulnerable Population involved'] == 'Yes':
                  score+=1
            if data['Influential Person Involved'] == 'Yes':
                  score += 1

            public_interest, overall_public_sentiment,count_negative=sentiment_fetcher('keywords.json')
            score+=public_interest/10
            if overall_public_sentiment== 'Negative':
                  score += count_negative
                  
            return score
        




