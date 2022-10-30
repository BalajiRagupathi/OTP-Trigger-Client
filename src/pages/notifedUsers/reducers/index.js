import { INITIAL_STATE } from "../../../app/store";

export default (state = INITIAL_STATE,action) => {
    
    switch(action.type) {
        case 'FETCH_NOTIFIED_USERS':
            return {...state,isLoading: false,notifiedUsers: { ...action.payload,error: null}};
        case 'FETCH_NOTIFIED_USERS_ERROR':
            return {...state,isLoading: false,notifiedUsers: { ...action.payload}};
        default:
           return state;
    }
};
