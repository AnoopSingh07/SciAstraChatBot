import React, { useState } from 'react';
import './ChatbotBox.css';
import ChatContainer from './ChatContainer';
import ChatbotLogo from '../Assets/chatbot-logo.png';
import CloseIcon from '../Assets/close-icon.jpg';

const ChatbotBox = () => {
  const [showChat, setShowChat] = useState(false);
  const [iconType, setIconType] = useState('bot');

  const toggleChat = () => {
    setShowChat(!showChat);
    setIconType(iconType === 'bot' ? 'close' : 'bot');
  };

  return (
    <div className={`chatbot-container ${showChat ? 'open' : ''}`}>
      {/* <div className={`chat-icon ${iconType}`} onClick={toggleChat}>
        <img src={iconType === 'bot' ? 'https://placekitten.com/50/50' : 'https://placekitten.com/40/40'} alt={iconType === 'bot' ? 'Chat Icon' : 'Close Icon'} />
      </div> */}
      <div className="chat-container">
        <div className="chat-header">
          <div className="close-icon" >
          <img className="close-icon-img" onClick={toggleChat} src={iconType === 'bot' ? ChatbotLogo : CloseIcon} alt={iconType === 'bot' ? 'Chat Icon' : 'Close Icon'} />
            {/* <img src="https://placekitten.com/40/40" alt="Close Icon" /> */}
          </div>
        </div>
        <div className="chat-content">
          {showChat && (
            <div>
              {/* Add your chatbot content here */}
              <ChatContainer/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatbotBox;
