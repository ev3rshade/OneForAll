import os

from groq import Groq

client = Groq(
    api_key=os.environ.get("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"),
)

user_input = input("Ask me a question!\n ")
chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "user",
            "content": user_input,
        }
    ],
    model="llama-3.3-70b-versatile",
)

print(chat_completion.choices[0].message.content + "\n")

while True:
    user_input = input("\n")

    chat_completion = client.chat.completions.create(
    
        messages=[
            
            {
                "role": "system",
                "content": "You are a gentle and helpful assistant who gives brief and short but accurate advice. You can memorize your users' prompts very well and help them with their issues. You also give resources if needed."
            },
            {
                "role": "user",
                "content": user_input,
            }
        ],
        model="llama-3.3-70b-versatile",
    )

    print(chat_completion.choices[0].message.content + "\n")
