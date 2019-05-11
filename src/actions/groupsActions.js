import { fetchGroupsList } from "../chat-api";
// import { fetchGroupsList } from "../chat-api/mocks";

export const GET_GROUPS_LIST_BEGIN = 'GET_GROUPS_LIST_BEGIN';
export const GET_GROUPS_LIST_SUCCESS = 'GET_GROUPS_LIST_SUCCESS';
export const GET_GROUPS_LIST_FAILED = 'GET_GROUPS_LIST_FAILED';


export const getGroupsListBegin = () => ({
  type: GET_GROUPS_LIST_BEGIN
});

export const getGroupsListSuccess = (groupsList) => ({
  type: GET_GROUPS_LIST_SUCCESS,
  payload: { groupsList }
});

export const getgroupsListFailed = error => ({
  type: GET_GROUPS_LIST_FAILED,
  payload: { error }
});


export const getGroupsList = () => {
  return dispatch => {
    dispatch(getGroupsListBegin());
    return fetchGroupsList()
      .then(json => {
        dispatch(getGroupsListSuccess(json));
        return json;
      })
      .catch(error =>
        dispatch(getgroupsListFailed(error))
      );
  };
};
