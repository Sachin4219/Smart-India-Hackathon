from flask import Flask,request
from case_scoring import score_case
from flask_cors import CORS

app=Flask(__name__)
CORS(app)

data=[
    {
        "id":1,
        "Case Type": "Declaration Suits",
        "Number of parties involved in the case": 4,
        "Diversity of Interests between parties": "Yes",
        "Presence of Counter Claims": "Yes",
        "Party or Member of Party Deceased": 1,
        "Volume of Evidence": 28,
        "Critical Evidence related to human rights violation or public safety": 0,
        "Urgency by Parties": "Yes",
        "Amount of Financial Claims made in the case": 40000,
        "Vulnerable Population (Children/ Elderly) involved in the case": "No",
        "Influential Person Involved (Businessman/Politician/Actor etc.)": "Yes",
        "Public Interest": 190,
        "Overall Public Sentiment": "Positive",
        "Number of witnesses": 18,
        "Number of hearings held": 7
    },
    {
        "id":2,
        "Case Type": "Intellectual Property Cases",
        "Number of parties involved in the case": 3,
        "Diversity of Interests between parties": "No",
        "Presence of Counter Claims": "Yes",
        "Party or Member of Party Deceased": 0,
        "Volume of Evidence": 16,
        "Critical Evidence related to human rights violation or public safety": 0,
        "Urgency by Parties": "Yes",
        "Amount of Financial Claims made in the case": 24000,
        "Vulnerable Population (Children/ Elderly) involved in the case": "No",
        "Influential Person Involved (Businessman/Politician/Actor etc.)": "Yes",
        "Public Interest": 100,
        "Overall Public Sentiment": "Neutral",
        "Number of witnesses": 6,
        "Number of hearings held": 9
    },
    {
        "id":3,
        "Case Type": "Assault and Battery Cases",
        "Number of parties involved in the case": 2,
        "Diversity of Interests between parties": "Yes",
        "Presence of Counter Claims": "No",
        "Party or Member of Party Deceased": 0,
        "Volume of Evidence": 10,
        "Critical Evidence related to human rights violation or public safety": 0,
        "Urgency by Parties": "Yes",
        "Amount of Financial Claims made in the case": 18000,
        "Vulnerable Population (Children/ Elderly) involved in the case": "No",
        "Influential Person Involved (Businessman/Politician/Actor etc.)": "No",
        "Public Interest": 60,
        "Overall Public Sentiment": "Positive",
        "Number of witnesses": 10,
        "Number of hearings held": 5
    },
    {
        "id":4,
        "Case Type": "Commercial Suits",
        "Number of parties involved in the case": 4,
        "Diversity of Interests between parties": "Yes",
        "Presence of Counter Claims": "Yes",
        "Party or Member of Party Deceased": 1,
        "Volume of Evidence": 24,
        "Critical Evidence related to human rights violation or public safety": 0,
        "Urgency by Parties": "Yes",
        "Amount of Financial Claims made in the case": 34000,
        "Vulnerable Population (Children/ Elderly) involved in the case": "Yes",
        "Influential Person Involved (Businessman/Politician/Actor etc.)": "Yes",
        "Public Interest": 160,
        "Overall Public Sentiment": "Neutral",
        "Number of witnesses": 6,
        "Number of hearings held": 0
    },
    {
        "id":5,
        "Case Type": "Child Custody Cases",
        "Number of parties involved in the case": 2,
        "Diversity of Interests between parties": "Yes",
        "Presence of Counter Claims": "Yes",
        "Party or Member of Party Deceased": 1,
        "Volume of Evidence": 12,
        "Critical Evidence related to human rights violation or public safety": 0,
        "Urgency by Parties": "No",
        "Amount of Financial Claims made in the case": 12000,
        "Vulnerable Population (Children/ Elderly) involved in the case": "Yes",
        "Influential Person Involved (Businessman/Politician/Actor etc.)": "No",
        "Public Interest": 70,
        "Overall Public Sentiment": "Positive",
        "Number of witnesses": 9,
        "Number of hearings held": 9
    },
    {
        "id":6,
        "Case Type": "Child Custody Cases",
        "Number of parties involved in the case": 4,
        "Diversity of Interests between parties": "Yes",
        "Presence of Counter Claims": "Yes",
        "Party or Member of Party Deceased": 1,
        "Volume of Evidence": 28,
        "Critical Evidence related to human rights violation or public safety": 0,
        "Urgency by Parties": "Yes",
        "Amount of Financial Claims made in the case": 28000,
        "Vulnerable Population (Children/ Elderly) involved in the case": "Yes",
        "Influential Person Involved (Businessman/Politician/Actor etc.)": "No",
        "Public Interest": 220,
        "Overall Public Sentiment": "Positive",
        "Number of witnesses": 14,
        "Number of hearings held": 17
    },
    {
        "id":7,
        "Case Type": "Money Suits",
        "Number of parties involved in the case": 2,
        "Diversity of Interests between parties": "No",
        "Presence of Counter Claims": "Yes",
        "Party or Member of Party Deceased": 0,
        "Volume of Evidence": 10,
        "Critical Evidence related to human rights violation or public safety": 0,
        "Urgency by Parties": "Yes",
        "Amount of Financial Claims made in the case": 18000,
        "Vulnerable Population (Children/ Elderly) involved in the case": "No",
        "Influential Person Involved (Businessman/Politician/Actor etc.)": "No",
        "Public Interest": 100,
        "Overall Public Sentiment": "Positive",
        "Number of witnesses": 16,
        "Number of hearings held": 2
    },
    {
        "id":8,
        "Case Type": "Pollution Control Cases",
        "Number of parties involved in the case": 3,
        "Diversity of Interests between parties": "Yes",
        "Presence of Counter Claims": "No",
        "Party or Member of Party Deceased": 0,
        "Volume of Evidence": 16,
        "Critical Evidence related to human rights violation or public safety": 0,
        "Urgency by Parties": "Yes",
        "Amount of Financial Claims made in the case": 22000,
        "Vulnerable Population (Children/ Elderly) involved in the case": "Yes",
        "Influential Person Involved (Businessman/Politician/Actor etc.)": "No",
        "Public Interest": 90,
        "Overall Public Sentiment": "Positive",
        "Number of witnesses": 2,
        "Number of hearings held": 16
    },
    {
        "id":9,
        "Case Type": "Adoption Cases",
        "Number of parties involved in the case": 2,
        "Diversity of Interests between parties": "No",
        "Presence of Counter Claims": "No",
        "Party or Member of Party Deceased": 0,
        "Volume of Evidence": 8,
        "Critical Evidence related to human rights violation or public safety": 0,
        "Urgency by Parties": "No",
        "Amount of Financial Claims made in the case": 10000,
        "Vulnerable Population (Children/ Elderly) involved in the case": "No",
        "Influential Person Involved (Businessman/Politician/Actor etc.)": "No",
        "Public Interest": 60,
        "Overall Public Sentiment": "Positive",
        "Number of witnesses": 8,
        "Number of hearings held": 16
    },
    {
        "id":10,
        "Case Type": "Fundamental Rights Cases",
        "Number of parties involved in the case": 3,
        "Diversity of Interests between parties": "Yes",
        "Presence of Counter Claims": "Yes",
        "Party or Member of Party Deceased": 1,
        "Volume of Evidence": 24,
        "Critical Evidence related to human rights violation or public safety": 0,
        "Urgency by Parties": "Yes",
        "Amount of Financial Claims made in the case": 32000,
        "Vulnerable Population (Children/ Elderly) involved in the case": "Yes",
        "Influential Person Involved (Businessman/Politician/Actor etc.)": "Yes",
        "Public Interest": 170,
        "Overall Public Sentiment": "Positive",
        "Number of witnesses": 2,
        "Number of hearings held": 18
    },
    {
        "id":11,
        "Case Type": "Maintenance Cases",
        "Number of parties involved in the case": 2,
        "Diversity of Interests between parties": "Yes",
        "Presence of Counter Claims": "No",
        "Party or Member of Party Deceased": 0,
        "Volume of Evidence": 12,
        "Critical Evidence related to human rights violation or public safety": 0,
        "Urgency by Parties": "Yes",
        "Amount of Financial Claims made in the case": 14000,
        "Vulnerable Population (Children/ Elderly) involved in the case": "Yes",
        "Influential Person Involved (Businessman/Politician/Actor etc.)": "No",
        "Public Interest": 80,
        "Overall Public Sentiment": "Positive",
        "Number of witnesses": 10,
        "Number of hearings held": 0
    },
    {
        "id":12,
        "Case Type": "Succession Cases",
        "Number of parties involved in the case": 4,
        "Diversity of Interests between parties": "Yes",
        "Presence of Counter Claims": "Yes",
        "Party or Member of Party Deceased": 1,
        "Volume of Evidence": 30,
        "Critical Evidence related to human rights violation or public safety": 0,
        "Urgency by Parties": "Yes",
        "Amount of Financial Claims made in the case": 50000,
        "Vulnerable Population (Children/ Elderly) involved in the case": "No",
        "Influential Person Involved (Businessman/Politician/Actor etc.)": "No",
        "Public Interest": 240,
        "Overall Public Sentiment": "Neutral",
        "Number of witnesses": 14,
        "Number of hearings held": 18
    },
]
print(data[0]['Case Type'])

@app.route("/")
def index():
    return {"test":"test"}

@app.route("/score",methods=["POST"])
def test():
    json_file=request.get_json()
    scores=[]

    for i in range(0,len(data)):
        scores.append([data[i]['id'],score_case(data[i])])

    sorted_score = sorted(scores, key=lambda x: x[1])

    return {"score":sorted_score}

if __name__=='__main__':
    app.run(port=5000,debug=True)