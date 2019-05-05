import { initChat } from "../chat-api";

export const INIT_BEGIN = 'INIT_BEGIN';
export const INIT_SUCCESS = 'INIT_SUCCESS';
export const INIT_FAILED = 'INIT_FAILED';

export const initBegin = () => ({
  type: INIT_BEGIN
});

export const initSuccess = () => ({
  type: INIT_SUCCESS
});

export const initFailed = () => ({
  type: INIT_FAILED
});

export const init = () => {
  return dispatch => {
    dispatch(initBegin());
    return initChat()
      .then(json => {
        dispatch(initSuccess());
        return json;
      })
      .catch(error =>
        dispatch(initFailed(error))
      );
  };
};

