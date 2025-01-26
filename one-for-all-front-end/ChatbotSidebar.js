"use client"; // Ensure the file is treated as a client-side component

import React, { useState } from "react";

// Define the ChatbotSidebar component
const ChatbotSidebar = () => {
  // State to toggle chatbot visibility
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  // Function to toggle the chatbot visibility
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  async function handleSendMessage() {
    if (userInput.trim()) {
      try {
        const response = await fetch('https://10.44.64.240:5000/chatbox', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user_input: userInput }),
        });

        const jsonResponse = await response.json();

        if (response.ok) {
          setMessages([
            ...messages,
            { text: userInput, sender: "user" },
            { text: jsonResponse.response, sender: "bot" }
          ]);
        } else {
          console.error("Error in response:", jsonResponse);
        }

      } catch (error) {
        alert('Error', 'Something went wrong');
        console.error(error);
      }

      // Clear the input field after sending
      setUserInput('');
    }
  };

  return (
    <div>
      {/* Button to open/close the chatbot */}
      <button
        onClick={toggleChatbot}
        style={{
          position: "fixed",
          right: "10px",
          bottom: "10px",
          backgroundColor: "#EC4899", // Button background
          color: "white", // Button text color
          border: "none", // No border
          padding: "10px 20px", // Button padding
          borderRadius: "5px", // Rounded corners
          cursor: "pointer", // Pointer cursor for clickable
        }}
      >
        {isOpen ? "Close Chat" : "Open Chat"} {/* Button text changes based on state */}
      </button>

      {/* Show the chatbot container only when isOpen is true */}
      {isOpen && (
        <div
          style={{
            position: "fixed", // Make it stick on the screen
            right: "10px", // Align to the right
            bottom: "60px", // Align to the bottom
            backgroundColor: "white", // Background color for the sidebar
            border: "1px solid #ccc", // Border for the sidebar
            padding: "10px", // Padding inside the sidebar
            paddingTop: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Shadow effect for 3D look
            zIndex: 1000, // Ensure it stays on top of other elements
            borderRadius: "8px", // Rounded corners
            width: "300px", // Set a fixed width for the chatbot
            height: "400px", // Set a fixed height for the chatbot
            display: "flex",
            flexDirection: "column", // Arrange items in a column
            justifyContent: "space-between", // Distribute items (messages and input box)
          }}
        >
          {/* Chat messages */}
          <div
            style={{
              flex: 1, // Allow messages to take available space
              overflowY: "auto", // Enable scrolling if content overflows
              backgroundColor: "#f9f9f9", // Chatbox background color
              borderRadius: "8px", // Rounded corners for chat content area
              padding: "10px", // Padding inside chat area
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Shadow effect for content area
              marginBottom: "10px", // Margin between chat and input box
            }}
          >
            <h2 style={{ textAlign: "center", marginBottom: "10px" }}>Chatbot</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px", // Space between chat messages
              }}
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: message.sender === "user" ? "#EC4899" : "#e4e4e4", // Message bubble background color
                    padding: "8px", // Padding inside message bubbles
                    borderRadius: "5px", // Rounded message bubbles
                    color: message.sender === "user" ? "white" : "black", // Text color
                    alignSelf: message.sender === "user" ? "flex-end" : "flex-start", // Align message
                  }}
                >
                  {message.text}
                </div>
              ))}
            </div>
          </div>

          {/* Input field and send button container */}
          <div
            style={{
              display: "flex",
              gap: "10px", // Space between input and button
              marginTop: "auto", // Push input to the bottom of the chatbox
            }}
          >
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your message..."
              style={{
                flex: 1, // Take available width
                padding: "8px", // Padding inside input box
                borderRadius: "5px", // Rounded input box
                border: "1px solid #ccc", // Border around input box
              }}
            />
            <button
              onClick={handleSendMessage}
              style={{
                backgroundColor: "#EC4899", // Send button background
                color: "white", // Button text color
                border: "none", // No border
                padding: "8px 12px", // Button padding
                borderRadius: "5px", // Rounded corners
                cursor: "pointer", // Pointer cursor for clickable
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotSidebar;
