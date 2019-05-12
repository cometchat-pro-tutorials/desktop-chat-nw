import React from "react";

import "./Messages.css";

const Messages = ({data}) => (
  <ul className="messages">
    {data && data.map((msg, idx) => (
      <li key={idx} className="message">
        <div>
          <strong>{msg.sender}:</strong>
          <p>{msg.text}</p>
        </div>
        <div><time>{msg.formattedTime}</time></div>
      </li>
    ))}
  </ul>
);

export default Messages;
