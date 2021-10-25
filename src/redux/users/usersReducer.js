import { createReducer, combineReducers } from '@reduxjs/toolkit';

// import initUsers from '../../json/users.json';
import usersActions from './usersActions';

const { addUser, editUser, deleteUser, getUserStatusSuccess, setSortBy, setSortOrder } =
    usersActions;

const list = createReducer([], {
    [addUser]: (state, { payload }) => [...state, payload],

    [editUser]: (state, { payload }) =>
        state.map(user => (user.id === payload.id ? payload : user)),

    [deleteUser]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const activeList = createReducer([], {
    [getUserStatusSuccess]: (state, { payload }) => [
        ...state.filter(({ id }) => id !== payload.id),
        { id: payload.id, isActive: payload.answer === 'yes' },
    ],

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
    activeList,
    sortBy,
    sortOrder,
});
