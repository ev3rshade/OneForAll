from flask import Flask, request, jsonify, session
from flask_cors import CORS, cross_origin
from functools import wraps
import random
import cipher
import os
from groq import Groq

app = Flask(__name__)
CORS(app)

@app.route('/')

@app.route('/chatbox', methods=['GET','POST'])
def chatbox():
    data = request.json
    print(data)
    user_input = data.get('user_input')

    client = Groq(api_key=os.environ.get("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"))

    chat_completion = client.chat.completions.create(
        messages=[
            {"role": "system", "content": "You are a gentle and helpful assistant who gives brief and short but accurate advice. You can memorize your users' prompts very well and help them with their issues. You also give resources if needed. Keep less than 5 sentences."},
            {"role": "user", "content": user_input},
        ],
        model="llama-3.3-70b-versatile",
    )

    response = chat_completion.choices[0].message.content

    return jsonify({"response": response})

if __name__ == '__main__':
    app.run(ssl_context='adhoc', host='0.0.0.0', port=5000)
