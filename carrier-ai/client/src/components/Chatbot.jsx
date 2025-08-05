import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);

    try {
      const response = await axios.post('http://localhost:5000/api/chat/openrouter', {
        messages: newMessages,
      });

      const botMessage = response.data;
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Chatbot error:', error.response?.data || error.message);
      const errorMessage = {
        role: 'assistant',
        content: 'Oops! Something went wrong. Please try again later.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setInput('');
  };

  const styles = {
    chatbotContainer: {
      maxWidth: '500px',
      margin: '40px auto',
      padding: '20px',
      borderRadius: '10px',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      border: '1px solid #e0e0e0',
    },
    chatWindow: {
      height: '350px',
      overflowY: 'auto',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      padding: '15px',
      marginBottom: '20px',
      boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.05)',
    },
    message: {
      margin: '10px 0',
      padding: '12px',
      borderRadius: '8px',
      fontSize: '14px',
      lineHeight: '1.5',
      maxWidth: '80%',
      wordWrap: 'break-word',
    },
    messageStrong: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: '600',
      color: '#333',
    },
    userMessage: {
      backgroundColor: '#e1f5fe',
      color: '#01579b',
      textAlign: 'left',
      border: '1px solid #b3e5fc',
    },
    aiMessage: {
      backgroundColor: '#f3e5f5',
      color: '#6a1b9a',
      textAlign: 'left',
      border: '1px solid #f8bbd0',
    },
    inputContainer: {
      display: 'flex',
      gap: '10px',
    },
    input: {
      flex: '1',
      padding: '12px',
      border: '1px solid #ccc',
      borderRadius: '6px',
      fontSize: '14px',
      outline: 'none',
      transition: 'border-color 0.3s ease',
    },
    inputFocus: {
      borderColor: '#4caf50',
    },
    button: {
      backgroundColor: '#4caf50',
      color: 'white',
      padding: '12px 20px',
      border: 'none',
      borderRadius: '6px',
      fontSize: '14px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#388e3c',
    },
    buttonDisabled: {
      backgroundColor: '#888',
      cursor: 'not-allowed',
    },
  };

  return (
    <div style={styles.chatbotContainer}>
      <div style={styles.chatWindow}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{ ...styles.message, ...(msg.role === 'user' ? styles.userMessage : styles.aiMessage) }}
          >
            <strong style={styles.messageStrong}>
              {msg.role === 'user' ? 'You' : 'AI'}:
            </strong>
            {msg.content}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your message"
          style={styles.input}
          onFocus={(e) => e.target.style.borderColor = styles.inputFocus.borderColor}
          onBlur={(e) => e.target.style.borderColor = '#ccc'}
        />
        <button
          onClick={handleSend}
          disabled={!input.trim()}
          style={{
            ...styles.button,
            ...(input.trim() ? {} : styles.buttonDisabled),
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;

