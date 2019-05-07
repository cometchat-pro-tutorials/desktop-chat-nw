import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, TextField } from "@material-ui/core";

import Messages from "../Messages/Messages";
import { sendMessage } from "../../actions"
import { readRecord } from '../../utils/localStorageService';
import "./Converstaion.css";

const Conversation = ({sendMessage}) => {
  const [message, setMessage] = useState('');
  const username = readRecord('username');


  const handleSend = () => {
    sendMessage({message, username}).then(msg => console.log(msg));
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
