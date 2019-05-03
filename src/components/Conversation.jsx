import React from "react";
import { Button } from "@material-ui/core";

const Conversation = () => (
  <div>
    <ul>
      <li>
        <div>
          <time>10.10.2010</time>
          <strong>Name:</strong>
          <p>Text...</p>
        </div>
      </li>
    </ul>
    <form>
      <div>
        <textarea required placeholder="Say something..."></textarea>
      </div>
      <div>
      <Button variant="contained" color="primary">OK</Button>
      </div>
    </form>
  </div>
);

export default Conversation;