import { createAction } from '@reduxjs/toolkit';

const addUser = createAction('users/addUser');

const editUser = createAction('users/editUser');

const deleteUser = createAction('users/deleteUser');

const setSortBy = createAction('users/setSortBy');

const setSortOrder = createAction('users/setSortOrder');

const usersActions = {
    addUser,
    editUser,
    deleteUser,
    setSortBy,
    setSortOrder,
};
export default usersActions;
