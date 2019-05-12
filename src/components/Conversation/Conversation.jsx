import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { Button, TextField } from "@material-ui/core";

import Messages from "../Messages/Messages";
import { sendMessage } from "../../actions"
import { prepareMessages, scrollToBottom } from '../../utils/helpers';
import "./Converstaion.css";

const Conversation = ({ sendMessage, groupConversations }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesAreaRef = useRef();

  useEffect(() => {
    setMessages(prepareMessages(groupConversations));
    const messagesArea = messagesAreaRef.current;
    return () => {
      scrollToBottom(messagesArea);
    }

  }, [groupConversations]);

  const handleSend = () => {
    sendMessage(message).then(msg => {
      setMessages([...messages, ...prepareMessages([msg])]);

      const messagesArea = messagesAreaRef.current;
      const shouldScroll = messagesArea.scrollTop + messagesArea.clientHeight !== messagesArea.scrollHeight;

      if (shouldScroll) {
        scrollToBottom(messagesArea);
      }

    });
  };

  return (
    <div className="conversation" ref={messagesAreaRef}>
      <Messages data={messages}/>
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
