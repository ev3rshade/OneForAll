import cipher
import random

def generate_keys():
    key = ""
    for i in range(random.randint(4, 6)):
        key += chr(random.randint(97, 122))
        with open("keys.txt", "a") as e:
            e.write(key + ", ")
    print(key)
generate_keys()

def signup():
    username = input("Enter username: ")
    password = input("Enter password: ")
    confirm_password = input("Confirm password: ")

    if password != confirm_password:
        print("Passwords don't match!")
        return

    with open("username.txt", "a") as f:
        f.write(username + ", ")

    with open("passwords.txt", "a") as p:
        p.write(cipher.encrypt_vigenere(password, key) + ", ")
    print("Account created successfully!")
    

def login(username, password):

    with open("username.txt", "r") as f:
        for line in f:
            stored_username, stored_password = line.strip().split(":")
            if stored_username == username and stored_password == password:
                print("Logged in successfully!")
                return
    print("Invalid username or password!")

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