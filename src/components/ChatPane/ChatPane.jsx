import React from "react";

import Participants from "../Participants/Participants";
import Conversation from "../Conversation/Conversation";
import "./ChatPane.css";

const ChatPane = () => (
  <div className="chat-pane">
    <Participants/>
    <Conversation/>
  </div>
);
export default ChatPane;
