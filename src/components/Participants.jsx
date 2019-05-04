import React from "react";
import { PermIdentity } from '@material-ui/icons';



const Participants = () => (
  <div>
    <ul>
      <li>
        <div>
          <strong><PermIdentity />Name</strong>
          <p>Joined 2 min ago</p>
        </div>
      </li>
    </ul>
  </div>
);

export default Participants;
