import React, { useEffect } from "react";
import { connect } from "react-redux";

import Participants from "../Participants/Participants";
import Conversation from "../Conversation/Conversation";
import { init, login } from '../../actions';
import "./ChatPane.css";

const ChatPane = ({init, login}) => {

    useEffect(() => {
        init().then(login);
    });

    return (
        <div className="chat-pane">
            <Participants />
            <Conversation />
        </div>);
};

const mapDispatchToProps = (dispatch) => ({
    init: () => dispatch(init()),
    login: () => dispatch(login())
});

export default connect(null, mapDispatchToProps)(ChatPane);
