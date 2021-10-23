import { createReducer, combineReducers } from '@reduxjs/toolkit';
import initUsers from '../../json/users.json';

const list = createReducer(initUsers, {});

export default combineReducers({
    list,
});
