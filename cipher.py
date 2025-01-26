import numpy as np

def encrypt_vigenere(message, key):
    KEY=key.upper() #convert key to upper-case
    MESSAGE=message.upper()#convert message to uppercase

    #empty lists for index of message and key
    message_v=[] 
    key_v=[]

    letters="A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".split(",")
    letters_lower="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",")
    numbers="0,1,2,3,4,5,6,7,8,9".split(',')

    #if length of message is less than key, split key to be same length
    if len(message)<len(KEY):
        message_length=len(message)
        KEY=KEY[:message_length]#slices to length of message 
    #if length of message is  longer than key, extend key
    elif len(message)>len(KEY):
        message_length=len(message)
        key_length=len(KEY) 
        #multiplies list by largest integer that is <= (message length/key length)
        KEY *= (message_length//key_length+1) #+1 accounts for any remainder characters in message length
        #slices to length of message
        KEY=KEY[:message_length]

    #converts character to number(index within list)
    for char in MESSAGE:
        if char in letters:
            message_v.append(letters.index(char))
        elif char in numbers:
            message_v.append(numbers.index(char))
        else:
            message_v.append(0) #placeholder for characters that aren't letters or numbers

    #converts character to number(index within list)     
    for char in KEY:
        if char in letters:
            key_v.append(letters.index(char))
        else: #for special characters
            key_v.append((ord(char))-13 )

    #convert to arrays so that they can be added together
    key_array=np.array(key_v)
    message_v_array=np.array(message_v)
    
    #add arrays
    encrypted_message_num=(key_array + message_v_array)
    
    encrypted_message=[]#empty list for encrypted message

    i=0 #initialize index of encrypted_message_num
    for char in message:
        if char in letters: #if the message character is uppercase, encrypted character will be uppercase
            #mod 26 when the index of encrypted message is out of the range [0,25]
            if encrypted_message_num[i]> 25:
                mod_encrypt_message = encrypted_message_num % 26
                encrypted_message.append(letters[mod_encrypt_message[i]])
            else:
                encrypted_message.append(letters[encrypted_message_num[i]])
        elif char in letters_lower:#if the message character is lowercase, encrypted character will be lowercase
            if encrypted_message_num[i] > 25:
                mod_encrypt_message = encrypted_message_num % 26
                encrypted_message.append(letters_lower[mod_encrypt_message[i]])
            else:
                encrypted_message.append(letters_lower[encrypted_message_num[i]])
        elif char in numbers:#if the message character is number, encrypted character will be number
            #mod 10 when the index of encrypted message is out of the range [0,9]
            if encrypted_message_num[i] > 9:
                mod_encrypt_message = encrypted_message_num % 10
                encrypted_message.append(numbers[mod_encrypt_message[i]])
            else:
                encrypted_message.append(numbers[encrypted_message_num[i]])
        else:
            #when character in message is not number or letter, appends the same character to encrypted message
            encrypted_message.append(char)
        i+=1#increases index of encrypted_message_num by 1

    encrypted_message_fin=''.join(encrypted_message)#joins into single string
    return (encrypted_message_fin)

def decrypt_vigenere(encrypted_message, key):
    KEY=key.upper() #convert key to upper-case
    MESSAGE=encrypted_message.upper()#convert message to uppercase

    #letters, lowercase_letters, numbers list
    letters="A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".split(",")
    letters_lower="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",")
    numbers="0,1,2,3,4,5,6,7,8,9".split(',')

    #if length of message is less than key, split key to be same length
    if len(encrypted_message)<len(KEY):
        message_length=len(encrypted_message)
        KEY=KEY[:message_length]#slices to length of message 
    #if length of message is  longer than key, extend key
    elif len(encrypted_message)>len(KEY):
        message_length=len(encrypted_message)
        key_length=len(KEY) 
        #multiplies list by largest integer that is <= (message length/key length)
        KEY *= (message_length//key_length+1) #+1 accounts for any remainder characters in message length
        #slices to length of message
        KEY=KEY[:message_length]

    #empty lists for index of message and key
    message_v=[] 
    key_v=[]
    
    #converts character to number(index within list)
    for char in MESSAGE:
        if char in letters:
            numerical_value=letters.index(char)
            message_v.append(numerical_value)
        elif char in numbers:
            numerical_value=numbers.index(char)
            message_v.append(numerical_value)
        else:
            message_v.append(0)#placeholder for characters that aren't letters or numbers

    #converts character to number(index within list)     
    for char in KEY:
        if char in letters:
            numerical_value=(letters.index(char))
            key_v.append(numerical_value)
        else:
            numerical_value=((ord(char))-13) #for special characters in key
            key_v.append(numerical_value)
    
    #convert to arrays
    key_array=np.array(key_v)
    message_v_array=np.array(message_v)
    

    #subtract arrays
    decrypted_message_num=(message_v_array-key_array)
    
    decrypted_message=[]#empty list for decrypted message
    i=0 #initialize index of decrypted_message_num
    for char in encrypted_message:
        if char in letters: #if the message character is uppercase, decrypted character will be uppercase
            mod_letter= (decrypted_message_num[i])%26 
            decrypted_message.append(letters[mod_letter])
        elif char in letters_lower:#if the message character is lowercase, decrypted character will be lowercase
            mod_letter = (decrypted_message_num[i])%26
            decrypted_message.append(letters_lower[mod_letter])
        elif char in numbers:#if the message character is number, decrypted character will be number
            mod_num=(decrypted_message_num[i])%10
            decrypted_message.append(numbers[mod_num])
        else:
            #when character in message is not number or letter, appends the same character to decrypted message
            decrypted_message.append(char)
        i+=1#increases index of decrypted_message_num by 1

    decrypted_message_fin=''.join(decrypted_message)#joins into single string
    return (decrypted_message_fin)