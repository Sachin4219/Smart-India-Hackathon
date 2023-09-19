from flask import Flask,request
from case_scoring import score_case
from flask_cors import CORS

app=Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return {"test":"test"}

@app.route("/score",methods=["POST"])
def test():
    json_file=request.get_json()
    ans=score_case(json_file)
    return {"score":ans}

if __name__=='__main__':
    app.run(port=5000,debug=True)