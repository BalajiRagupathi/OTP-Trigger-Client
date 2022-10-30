import {OTPApiBaseURL} from "../../../app/axios/baseURL";

export const fetchNotifiedUsers = () => async (dispatch,getState) => {

    try {
        const response = await OTPApiBaseURL.get(`/api/users/notified`);
        dispatch({
            type: "FETCH_NOTIFIED_USERS",
            payload: response.data
        })
    } catch (e) {
        const prevState = getState();
        dispatch({
            type: "FETCH_NOTIFIED_USERS_ERROR",
            payload: {
                    ...prevState.notifiedUsers.data,
                    error: "Error in fetching"
                }
        })
    }
}
