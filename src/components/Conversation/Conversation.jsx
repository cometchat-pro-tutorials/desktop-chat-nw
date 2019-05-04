import React from "react";
import { Button } from "@material-ui/core";
import TextField from '@material-ui/core/TextField/index';
import "./Converstaion.css";

const Conversation = () => (
  <div className="conversation">
    <ul>
      <li>
        <div>
          <time>10:33:55 AM</time>
          <strong>John Doe:</strong>
          <p>Hello, how are you today?</p>
        </div>
      </li>
    </ul>
    <form style={{ margin: 14 }}>
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
        <Button variant="contained" color="secondary">OK</Button>
      </div>
    </form>
  </div>
);

export default Conversation;
