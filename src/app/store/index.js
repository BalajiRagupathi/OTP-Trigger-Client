import { configureStore } from '@reduxjs/toolkit';
import {applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import usersReducer from "../../pages/users/reducer";
import notifiedUsersReducer from "../../pages/notifedUsers/reducers"

export const INITIAL_STATE =   {
  isLoading: true,
  users: {
    data: [],
    error: null
  },
  notifiedUsers: {
    data: [],
    error: null
  }
}

export const reducer =  combineReducers({
  users: usersReducer,
  notifiedUsers: notifiedUsersReducer
})

export default configureStore({reducer},applyMiddleware(thunk));