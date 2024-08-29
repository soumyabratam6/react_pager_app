/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";

const MessageList = () => {
  const [messages, setMessages] = useState({});
  useEffect(() => {
    axios
      .get(
        "https://pager-5b9a6-default-rtdb.asia-southeast1.firebasedatabase.app/message.json"
      )
      .then((response) => {
        //console.log(response.data);
        let messageList = [];
        for (let messageId in response.data) {
          messageList.push(response.data[messageId]);
        }
        // console.log(messageList);
        messageList.reverse();
        let messageListDisplay = messageList.slice(0, 5);
        setMessages(messageListDisplay);
      });
  }, []);
  return (
    <div className="message-container">
      {messages.length > 0 &&
        messages.map((message,index) => {
          return (
            <div className="message-card" key={index}>
              <div className='user-name'>{message.firstName}</div>
              <div className="user-message" >{message.message}</div>
            </div>
          );
        })}
    </div>
  );
};

export default MessageList;
