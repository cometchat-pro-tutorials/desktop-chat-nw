import React from "react";
import { PermIdentity } from '@material-ui/icons/index';
import "./Participants.css";


const Participants = () => (
  <div className="sidebar">
    <ul>
      <li className="participant-area">
        <div className="participant">
          <PermIdentity /><strong>John Doe</strong>
          <p>Joined 2 min ago</p>
        </div>
      </li>
    </ul>
  </div>
);

export default Participants;
