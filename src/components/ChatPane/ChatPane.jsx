import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Participants from "../Participants/Participants";
import Conversation from "../Conversation/Conversation";
import { fetchGroupConversations, getUsersList, init, login } from '../../actions';
import { readRecord } from '../../utils/localStorageService';
import "./ChatPane.css";

const ChatPane = ({ init, login, getUsersList, fetchGroupConversations }) => {
    const [usersList, setUsersList] = useState([]);
    const [groupConversations, setGroupConversations] = useState([]);

    useEffect(() => {
        init().then(login(readRecord('username')).then(() => {
            getUsersList().then(usersList => setUsersList(usersList));
            fetchGroupConversations().then(conversationsData => setGroupConversations(conversationsData));
        }));
    }, [getUsersList, login, init, fetchGroupConversations]);

    return (
        <div className="chat-pane">
            <Participants list={usersList}/>
            <Conversation groupConversations={groupConversations} />
        </div>);
};

const mapDispatchToProps = (dispatch) => ({
    init: () => dispatch(init()),
    login: () => dispatch(login()),
    getUsersList: () => dispatch(getUsersList()),
    fetchGroupConversations: () => dispatch(fetchGroupConversations())
});

export default connect(null, mapDispatchToProps)(ChatPane);
