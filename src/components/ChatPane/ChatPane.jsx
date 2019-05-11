import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Participants from "../Participants/Participants";
import Conversation from "../Conversation/Conversation";
import { getGroupsList, getUsersList, init, login } from '../../actions';
import "./ChatPane.css";

const ChatPane = ({ init, login, getUsersList, getGroupsList }) => {
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        init().then(login().then((userData) => {
            // console.log('logging in user: ', userData);
            getUsersList().then(usersList => setUsersList(usersList));
        }));
    }, [getGroupsList, getUsersList, login, init]);

    return (
        <div className="chat-pane">
            <Participants list={usersList}/>
            <Conversation />
        </div>);
};

const mapDispatchToProps = (dispatch) => ({
    init: () => dispatch(init()),
    login: () => dispatch(login()),
    getUsersList: () => dispatch(getUsersList()),
    getGroupsList: () => dispatch(getGroupsList()),
});

export default connect(null, mapDispatchToProps)(ChatPane);
