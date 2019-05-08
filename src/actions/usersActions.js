// import { fetchUserList } from "../chat-api";
import { fetchUserList } from "../chat-api/mocks";

export const GET_USER_LIST_BEGIN = 'GET_USER_LIST_BEGIN';
export const GET_USER_LIST_SUCCESS = 'GET_USER_LIST_SUCCESS';
export const GET_USER_LIST_FAILED = 'GET_USER_LIST_FAILED';


export const getUsersListBegin = () => ({
    type: GET_USER_LIST_BEGIN
});

export const getUsersListSuccess = (userList) => ({
    type: GET_USER_LIST_SUCCESS,
    payload: { userList }
});

export const getUsersListFailed = error => ({
    type: GET_USER_LIST_FAILED,
    payload: { error }
});


export const getUsersList = () => {
    return dispatch => {
        dispatch(getUsersListBegin());
        return fetchUserList()
            .then(json => {
                dispatch(getUsersListSuccess(json));
                return json;
            })
            .catch(error =>
                dispatch(getUsersListFailed(error))
            );
    };
};
