import { sendChatMessage } from "../chat-api"

export const INIT_BEGIN = 'INIT_BEGIN';
export const INIT_SUCCESS = 'INIT_SUCCESS';
export const INIT_FAILED = 'INIT_FAILED';

export const LOGIN_BEGIN = 'LOGIN_BEGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const SEND_MESSAGE_BEGIN = 'SEND_MESSAGE_BEGIN';
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
export const SEND_MESSAGE_FAILED = 'SEND_MESSAGE_FAILED';

// Init
export const initBegin = () => ({
  type: INIT_BEGIN
});

export const initSuccess = () => ({
  type: INIT_SUCCESS
});

export const initFailed = () => ({
  type: INIT_FAILED
});

// Login
export const loginBegin = () => ({
  type: LOGIN_BEGIN
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS
});

export const loginFailed = () => ({
  type: LOGIN_FAILED
});

// Send message
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


export function sendMessage(message) {
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
}
