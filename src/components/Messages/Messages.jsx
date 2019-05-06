import React from "react";

import "./Messages.css";

const Messages = () => (
  <ul className="messages">
    <li className="message">
      <div>
        <strong>John Doe:</strong>
        <p>Hello, how are you today?</p>
      </div>
      <div><time>10:33:55 AM</time></div>
    </li>
    <li className="message">
      <div>
        <strong>Mihail Gaberov:</strong>
        <p>Hello, I am good, thanks!</p>
      </div>
      <div><time>10:34:23 AM</time></div>
    </li>
  </ul>
);

export default Messages;
