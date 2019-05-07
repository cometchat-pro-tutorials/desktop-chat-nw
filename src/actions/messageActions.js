// import { sendChatMessage } from "../chat-api";
import { sendChatMessage } from "../chat-api/mocks";

export const SEND_MESSAGE_BEGIN = 'SEND_MESSAGE_BEGIN';
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
export const SEND_MESSAGE_FAILED = 'SEND_MESSAGE_FAILED';


export const sendMessageBegin = () => ({
    type: SEND_MESSAGE_BEGIN
});

export const sendMessageSuccess = ({message, username}) => ({
    type: SEND_MESSAGE_SUCCESS,
    payload: { message, username }
});

export const sendMessageFailed = error => ({
    type: SEND_MESSAGE_FAILED,
    payload: { error }
});


export const sendMessage = message => {
    return dispatch => {
        dispatch(sendMessageBegin());
        return sendChatMessage(message)
            .then(json => {
                dispatch(sendMessageSuccess(message));
                return json;
            })
            .catch(error =>
                dispatch(sendMessageFailed(error))
            );
    };
};
