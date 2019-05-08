import React from "react";
import { PermIdentity } from '@material-ui/icons/index';

import "./Participants.css";

const getMinutesFromTimestamp = (timestamp) => (new Date(+ new Date() - timestamp).getMinutes());

const Participants = ({list}) => (
  <div className="sidebar">
    <ul>
        {list && list.map(user => (
            <li className="participant-area" key={user.uid+user.authToken}>
                <div className="participant">
                    <PermIdentity /><strong>{user.name}</strong>
                    <p>Joined {getMinutesFromTimestamp(user.lastActiveAt)} min ago</p>
                </div>
            </li>
        ))}
      {/*<li className="participant-area">
        <div className="participant">
          <PermIdentity /><strong>Mihail Gaberov</strong>
          <p>Joined 2 mins ago</p>
        </div>
      </li>
      <li className="participant-area">
        <div className="participant">
          <PermIdentity /><strong>John Doe</strong>
          <p>Joined 1 min ago</p>
        </div>
      </li>*/}
    </ul>
  </div>
);

export default Participants;
