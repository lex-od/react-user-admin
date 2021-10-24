import { createAction } from '@reduxjs/toolkit';

const deleteUser = createAction('users/deleteUser');

const usersActions = {
    deleteUser,
};
export default usersActions;
