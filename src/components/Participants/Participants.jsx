import React from "react";
import { PermIdentity } from '@material-ui/icons/index';

import { getMinutesFromLastActiveTimestamp } from '../../utils/helpers';
import "./Participants.css";

const Participants = ({list}) => (
  <div className="sidebar">
    <ul>
        {list && list.map(user => (
            <li className="participant-area" key={user.uid+user.authToken}>
                <div className="participant">
                    <PermIdentity /><strong>{user.name}</strong>
                    <p>Joined {getMinutesFromLastActiveTimestamp(user.lastActiveAt)} min ago</p>
                </div>
            </li>
        ))}
    </ul>
  </div>
);

export default Participants;
