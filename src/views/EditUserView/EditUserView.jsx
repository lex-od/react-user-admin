import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';

import css from './EditUserView.module.scss';
import routes from '../../routes';
import { usersActs, usersSls } from '../../redux/users';
import { Container, UserForm } from '../../components/common';

const EditUserView = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { userId } = useParams();
    const user = useSelector(state => usersSls.getUserById(state, userId));

    const handleEditUser = editedUser => {
        dispatch(usersActs.editUser(editedUser));

        history.push(routes.home);
    };

    return (
        <Container>
            <h1 className={css.pageTitle}>Редактирование пользователя</h1>

            {user && <UserForm onSubmit={handleEditUser} initValues={user} />}

            {!user && <p className={css.notFoundNotification}>ID не найден</p>}
        </Container>
    );
};

export default EditUserView;
