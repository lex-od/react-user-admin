import { createReducer, combineReducers } from '@reduxjs/toolkit';

import initUsers from '../../json/users.json';
import usersActions from './usersActions';

const { deleteUser } = usersActions;

const list = createReducer(initUsers, {
    [deleteUser]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

export default combineReducers({
    list,
});
