import {OTPApiBaseURL} from "../../../app/axios/baseURL";

export const fetchUsers = () => async (dispatch,getState) => {

    try {
        const response = await OTPApiBaseURL.get(`/api/users`);
        
        dispatch({
            type: "FETCH_USERS",
            payload: response.data
        })
    } catch (e) {
        const prevState = getState();
        
        dispatch({
            type: "FETCH_USERS_ERROR",
            payload: {
                    ...prevState.users.data,
                    error: "Error in fetching"
                }
        })
    }
}

export const sendSMS = async (message,userId) => {
    try {
        const response = await OTPApiBaseURL.post(`/api/otp/send`,{message,userId});
        return response.data;
    } catch (e) {
        return {
            error: e.message
        }
    }
}
