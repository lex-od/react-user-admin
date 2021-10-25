import { createAction } from '@reduxjs/toolkit';

const addUser = createAction('users/addUser');

const editUser = createAction('users/editUser');

const deleteUser = createAction('users/deleteUser');

const getUserStatusRequest = createAction('users/getUserStatus/request');
const getUserStatusSuccess = createAction('users/getUserStatus/success');
const getUserStatusError = createAction('users/getUserStatus/error');

const setSortBy = createAction('users/setSortBy');

const setSortOrder = createAction('users/setSortOrder');

const usersActions = {
    addUser,
    editUser,
    deleteUser,
    getUserStatusRequest,
    getUserStatusSuccess,
    getUserStatusError,
    setSortBy,
    setSortOrder,
};
export default usersActions;
