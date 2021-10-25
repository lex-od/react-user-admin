import { api } from '../../services';
import usersActions from './usersActions';

const { getUserStatusRequest, getUserStatusSuccess, getUserStatusError } = usersActions;

const getUserStatus = id => async dispatch => {
    dispatch(getUserStatusRequest());

    try {
        const data = await api.getUserStatus();

        dispatch(getUserStatusSuccess({ ...data, id }));
    } catch ({ name, message }) {
        dispatch(getUserStatusError({ name, message }));
    }
};

const usersOperations = {
    getUserStatus,
};
export default usersOperations;
