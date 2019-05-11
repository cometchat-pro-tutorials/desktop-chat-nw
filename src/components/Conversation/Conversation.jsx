import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, TextField } from "@material-ui/core";

import Messages from "../Messages/Messages";
import { sendMessage } from "../../actions"
import "./Converstaion.css";

const Conversation = ({ sendMessage, groupConversations }) => {
  const [message, setMessage] = useState('');

  const messages = groupConversations.map(conversationData => {
    const date = new Date(conversationData.sentAt * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return {text: conversationData.text, formattedTime}
  });

  console.log(messages, '<<< messages');


  const handleSend = () => {
    sendMessage(message).then(msg => console.log(msg));
  };

  return (
    <div className="conversation">
      <Messages/>
      <form className="chat-form">
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Say something..."
            multiline
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rowsMax="6"
            className="text-area"
            margin="normal"
            variant="outlined"
          />
        </div>
        <div>
          <Button variant="contained" color="secondary" onClick={handleSend}>SEND</Button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  sendMessage: (message) => dispatch(sendMessage(message)),
});

export default connect(null, mapDispatchToProps)(Conversation);
