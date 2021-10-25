import { createReducer, combineReducers } from '@reduxjs/toolkit';

import initUsers from '../../json/users.json';
import usersActions from './usersActions';

const { addUser, editUser, deleteUser, setSortBy, setSortOrder } = usersActions;

const list = createReducer(initUsers, {
    [addUser]: (state, { payload }) => [...state, payload],

    [editUser]: (state, { payload }) =>
        state.map(user => (user.id === payload.id ? payload : user)),

    [deleteUser]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const sortBy = createReducer('name', {
    [setSortBy]: (_, { payload }) => payload,
});

const sortOrder = createReducer('asc', {
    [setSortOrder]: (_, { payload }) => payload,
});

export default combineReducers({
    list,
    sortBy,
    sortOrder,
});
