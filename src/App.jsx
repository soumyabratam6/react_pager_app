/* eslint-disable no-unused-vars */
import React from "react";
import Form from "./components/Form";
import MessageList from "./components/MessageList";
import "./app.css";
const App = () => {
  return (
    <div className="app">
      <div className="container">
        <dive className="shape-1"></dive>
        <div className="shape-2"></div>
        <Form />
      </div>
      <MessageList />
    </div>
  );
};

export default App;
