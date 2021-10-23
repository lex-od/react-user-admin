import { createReducer, combineReducers } from '@reduxjs/toolkit';

const list = createReducer([], {});

export default combineReducers({
    list,
});
