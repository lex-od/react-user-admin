import { createAction } from '@reduxjs/toolkit';

const deleteUser = createAction('users/deleteUser');

const setSortBy = createAction('users/setSortBy');

const setSortOrder = createAction('users/setSortOrder');

const usersActions = {
    deleteUser,
    setSortBy,
    setSortOrder,
};
export default usersActions;
