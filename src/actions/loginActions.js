import { loginChat } from '../chat-api';

export const LOGIN_BEGIN = 'LOGIN_BEGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const loginBegin = () => ({
  type: LOGIN_BEGIN
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS
});

export const loginFailed = () => ({
  type: LOGIN_FAILED
});

export const login = () => {
    return dispatch => {
        dispatch(loginBegin());
        return loginChat()
            .then(json => {
                dispatch(loginSuccess());
                return json;
            })
            .catch(error =>
                dispatch(loginFailed(error))
            );
    };
};

