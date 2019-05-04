import React from "react";
import { PermIdentity } from '@material-ui/icons/index';
import "./Participants.css";


const Participants = () => (
  <div className="sidebar">
    <ul>
      <li>
        <div>
          <strong><PermIdentity />John Doe</strong>
          <p>Joined 2 min ago</p>
        </div>
      </li>
    </ul>
  </div>
);

export default Participants;
