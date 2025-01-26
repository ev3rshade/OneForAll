from flask import Flask, request, jsonify, session
import random
import cipher
import os
from groq import Groq

app = Flask(__name__)
app.secret_key = ''

def generate_keys():
    key = ""
    for _ in range(random.randint(4, 6)):
        key += chr(random.randint(97, 122))
    with open("keys.txt", "a") as f:
        f.write(key + ", ")
    return key

def authenticate_user(username, password):
    try:
        with open("username.txt", "r") as f:
            stored_usernames = f.read().strip().split(", ")

        if username not in stored_usernames:
            return False, "Invalid username or password!"

        index = stored_usernames.index(username)

        with open("keys.txt", "r") as f:
            stored_keys = f.read().strip().split(", ")

        with open("passwords.txt", "r") as f:
            stored_passwords = f.read().strip().split(", ")

        decrypted_password = cipher.decrypt_vigenere(stored_passwords[index], stored_keys[index])

        if password == decrypted_password:
            return True, ""
        else:
            return False, "Invalid username or password!"
    except Exception as e:
        return False, str(e)

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    success, message = authenticate_user(username, password)
    if success:
        session['username'] = username
        return jsonify({"message": "Logged in successfully!"}), 200
    else:
        return jsonify({"error": message}), 401

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    confirm_password = data.get('confirm_password')

    if password != confirm_password:
        return jsonify({"error": "Passwords don't match!"}), 400

    with open("username.txt", "a") as f:
        f.write(username + ", ")

    key = generate_keys()

    with open("passwords.txt", "a") as p:
        p.write(cipher.encrypt_vigenere(password, key) + ", ")

    return jsonify({"message": "Account created successfully!"}), 201

@app.route('/api/chatbox', methods=['POST'])
def chatbox():
    if 'username' not in session:
        return jsonify({"error": "Unauthorized"}), 401

    data = request.json
    user_input = data.get('user_input')

    client = Groq(api_key=os.environ.get("GROQ_API_KEY"))

    chat_completion = client.chat.completions.create(
        messages=[
            {"role": "system", "content": "You are a gentle and helpful assistant who gives brief and short but accurate advice. You can memorize your users' prompts very well and help them with their issues. You also give resources if needed. Keep less than 5 sentences."},
            {"role": "user", "content": user_input},
        ],
        model="llama-3.3-70b-versatile",
    )

    response = chat_completion.choices[0].message.content
    return jsonify({"response": response}), 200

if __name__ == '__main__':
    app.run(debug=True)
