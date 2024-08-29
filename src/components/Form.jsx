/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
const Form = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const handleNameChange = (e) => {
    const namevalue = e.target.value;
    console.log(namevalue);
    setName(namevalue);
  };
  const handleMessageChange = (e) => {
    const messageval = e.target.value;
    setMessage(messageval);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const forname = name.trim();
    const forMessage = message.trim();

    if (forname === "" || forMessage === "") {
      alert("fill all the form field");
      return;
    }
    if (forname.length < 3) {
      alert("name must be 3character long");
      return;
    }
    if (forMessage.length < 10) {
      alert("message must be 10 character long");
      return;
    }
    //console.log(name,message)
    const response = axios({
      method: "post",
      url: "https://pager-5b9a6-default-rtdb.asia-southeast1.firebasedatabase.app/message.json",
      data: {
        firstName: name,
        message: message,
      },
    });
    setName("");
    setMessage("");

    //console.log(response)
  };
  return (
    <div className="form-container">
      <form action="">
        <div className="form-header">send message to AccioJob</div>
        <div className="form-input">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <input
            type="text"
            placeholder="john deo"
            onChange={handleNameChange}
            value={name}
          />
        </div>
        <div className="form-input">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <input
            type="text"
            placeholder="send message"
            onChange={handleMessageChange}
            value={message}
          />
        </div>
        <div className="form-btn">
          <button onClick={handleSubmit}>Send</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
