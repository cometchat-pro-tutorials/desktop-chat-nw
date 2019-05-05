import { sendChatMessage } from "../chat-api";

export const SEND_MESSAGE_BEGIN = 'SEND_MESSAGE_BEGIN';
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
export const SEND_MESSAGE_FAILED = 'SEND_MESSAGE_FAILED';


export const sendMessageBegin = message => ({
  type: SEND_MESSAGE_BEGIN,
  payload: {message}
});

export const sendMessageSuccess = () => ({
  type: SEND_MESSAGE_SUCCESS
});

export const sendMessageFailed = error => ({
  type: SEND_MESSAGE_FAILED,
  payload: {error}
});


export const sendMessage = message => {
  return dispatch => {
    dispatch(sendMessageBegin(message));
    return sendChatMessage(message)
      .then(json => {
        dispatch(sendMessageSuccess());
        return json;
      })
      .catch(error =>
        dispatch(sendMessageFailed(error))
      );
  };
};
