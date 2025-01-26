from flask import Flask, request, jsonify
from flask_cors import CORS
from groq import Groq

app = Flask(__name__)
CORS(app)

client = Groq(
    api_key='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'
)

@app.route('/chatbox', methods=['GET','POST'])
def chatbox():
    try:
        data = request.get_json()
        if not data or 'user_input' not in data:
            return jsonify({"error": "Invalid input, 'user_input' key missing"}), 400
        
        user_input = data['user_input']
        print(f"User input: {user_input}")

        # Groq API - chat completion
        chat_completion = client.chat.completions.create(
            messages=[
                {"role": "system", "content": "You are a gentle and helpful assistant who gives brief and short but accurate advice. You can memorize your users' prompts very well and help them with their issues. You also give resources if needed. Keep less than 5 sentences."},
                {"role": "user", "content": user_input},
            ],
            model="llama-3.3-70b-versatile",
        )

        response = chat_completion.choices[0].message.content if chat_completion and chat_completion.choices else "No response from model."

        print(response)
        return jsonify({"response": response})
    
    except Exception as e:
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(ssl_context='adhoc', host='0.0.0.0', port=5000)