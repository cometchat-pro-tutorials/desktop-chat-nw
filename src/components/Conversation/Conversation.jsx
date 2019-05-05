import React, { useState } from "react";
import { connect } from 'react-redux';

import { Button } from "@material-ui/core";
import TextField from '@material-ui/core/TextField/index';
import "./Converstaion.css";
import Messages from '../Messages/Messages';
import { sendMessageBegin } from '../../actions'

const Conversation = ({sendMessage}) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    sendMessage(message);
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
  sendMessage: (message) => dispatch(sendMessageBegin(message)),
});

export default connect(null, mapDispatchToProps)(Conversation);
