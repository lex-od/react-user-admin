import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import css from './AddUserView.module.scss';
import routes from '../../routes';
import { usersActs } from '../../redux/users';
import { Container, UserForm } from '../../components/common';

const AddUserView = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleAddUser = newUser => {
        dispatch(usersActs.addUser({ ...newUser, avatar: '', status: '-' }));

        history.push(routes.home);
    };

    return (
        <Container>
            <h1 className={css.pageTitle}>Добавление пользователя</h1>

            <UserForm onSubmit={handleAddUser} />
        </Container>
    );
};

export default AddUserView;
