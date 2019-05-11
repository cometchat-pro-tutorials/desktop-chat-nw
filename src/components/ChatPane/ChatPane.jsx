import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Participants from "../Participants/Participants";
import Conversation from "../Conversation/Conversation";
import { fetchGroupConversations, getUsersList, init, login } from '../../actions';
import "./ChatPane.css";

const ChatPane = ({ init, login, getUsersList, fetchGroupConversations }) => {
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        init().then(login().then(() => {
            getUsersList().then(usersList => setUsersList(usersList));
            fetchGroupConversations().then(data => console.log('>>> conversations: ', data));
        }));
    }, [getUsersList, login, init]);

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
    fetchGroupConversations: () => dispatch(fetchGroupConversations())
});

export default connect(null, mapDispatchToProps)(ChatPane);
