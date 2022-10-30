import { INITIAL_STATE } from "../../../app/store";

export default (state = INITIAL_STATE,action) => {
    
    switch(action.type) {
        case 'FETCH_USERS':
            return {...state,isLoading: false,users: { ...action.payload,error: null}};
        case 'FETCH_USERS_ERROR':
            return {...state,isLoading: false,users: { ...action.payload}};
        default:
           return state;
    }
};
