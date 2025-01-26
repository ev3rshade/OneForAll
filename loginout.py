import cipher
import random

def generate_keys():
    key = ""
    for i in range(random.randint(4, 6)):
        key += chr(random.randint(97, 122))  
    with open("keys.txt", "a") as f:
        f.write(key + ", ")
    return key

def signup():
    username = input("Enter username: ")
    password = input("Enter password: ")
    confirm_password = input("Confirm password: ")

    if password != confirm_password:
        print("Passwords don't match!")
        return

    with open("username.txt", "a") as f:
        f.write(username + ", ")

    key = generate_keys()

    with open("passwords.txt", "a") as p:
        p.write(cipher.encrypt_vigenere(password, key) + ", ")
    print("Account created successfully!")
    

def login():
    stored_username = []
    stored_password = []
    stored_key = []
    key = ""
    decrypted_password = ""
    index = -1

    username = input("Username: ")
    password = input("Password: ")

    with open("username.txt", "r") as f:
        for line in f:
            stored_username = line.replace(" ", "").strip().split(",")

    with open("keys.txt", "r") as f:
        for line in f:
            stored_key = line.replace(" ", "").strip().split(",")

    with open("passwords.txt", "r") as f:
        for line in f:
            stored_password = line.replace(" ", "").strip().split(",")

    for i in range(len(stored_username)):
        if stored_username[i] == username:
            index = i 
    if index < 0:
        print("Invalid username or password!")
        return
    
    key = stored_key[index]
    decrypted_password = cipher.decrypt_vigenere(stored_password[index], key)

    if password == decrypted_password:
        print("logged in successfully")
    else:
        print("Invalid username or password!")
        return

while True:
    choice = input("1. Sign up\n2. Login\n3. Exit\n")
    if choice == "1":
        signup()
    elif choice == "2":
        login()
    elif choice == "3":
        break
    else:
        print("Invalid choice!")