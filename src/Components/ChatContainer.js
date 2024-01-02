import React from "react";
import Chatbot from "react-chatbot-kit";

import config from "../ChatbotParam/config";
import ActionProvider from "../ChatbotParam/ActionProvider";
import MessageParser from "../ChatbotParam/MessageParser";

import "./ChatContainer.css";
const ChatContainer = () => {
    return (
        <div className="ChatContainer">
          <div style={{ maxWidth: "300px" }}>
            <Chatbot
              config={config}
              actionProvider={ActionProvider}
              messageParser={MessageParser}
            />
          </div>
        </div>
      );
};

export default ChatContainer;
