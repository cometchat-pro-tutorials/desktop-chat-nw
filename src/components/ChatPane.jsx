import React from "react";

import Participants from "./Participants";
import Conversation from "./Conversation";

const ChatPane = (props) => (
    <div>
        <Participants />
        <Conversation />
    </div>
);
export default ChatPane;