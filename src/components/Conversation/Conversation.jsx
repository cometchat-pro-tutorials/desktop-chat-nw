import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { Button, TextField } from "@material-ui/core";

import Messages from "../Messages/Messages";
import { sendMessage } from "../../actions"
import { prepareMessages, scrollToBottom } from '../../utils/helpers';
import "./Converstaion.css";

const Conversation = ({ sendMessage, groupConversations }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const messagesAreaRef = useRef();

    useEffect(() => {
        const messagesArea = messagesAreaRef.current;
        setMessages(prepareMessages(groupConversations));

        return () => {
            scrollToBottom(messagesArea);
        }
    }, [groupConversations]);

    const processMessage = (message) => {
        if (message === '') return;

        sendMessage(message).then(msg => {
            setMessages([...messages, ...prepareMessages([msg])]);
            setMessage(''); // Clear text input
            const messagesArea = messagesAreaRef.current;
            const shouldScroll = messagesArea.scrollTop + messagesArea.clientHeight !== messagesArea.scrollHeight;

            if (shouldScroll) {
                scrollToBottom(messagesArea);
            }
        });
    };

    const handleSend = () => {
        processMessage(message);
    };

    return (
        <div className="conversation" ref={messagesAreaRef}>
            <Messages data={messages} />
            <form className="chat-form">
                <div>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Say something..."
                        multiline
                        fullWidth
                        value={message}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                processMessage(e.target.value);
                            }
                        }}
                        onChange={(e) => setMessage(e.target.value)}
                        rowsMax="6"
                        className="text-area"
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                <div>
                    <Button variant="contained" color="secondary" onClick={handleSend}>SEND</Button>
                </div>
            </form>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    sendMessage: (message) => dispatch(sendMessage(message)),
});

export default connect(null, mapDispatchToProps)(Conversation);
