import React from "react";
import { Button } from "@material-ui/core";
import TextField from '@material-ui/core/TextField/index';
import "./Converstaion.css";
import Messages from '../Messages/Messages';

const Conversation = () => (
  <div className="conversation">
    <Messages/>
    <form className="chat-form">
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Say something..."
          multiline
          fullWidth
          rowsMax="6"
          value={''}
          onChange={console.log('>>> text area change')}
          className="text-area"
          margin="normal"
          variant="outlined"
        />
      </div>
      <div>
        <Button variant="contained" color="secondary">SEND</Button>
      </div>
    </form>
  </div>
);

export default Conversation;
