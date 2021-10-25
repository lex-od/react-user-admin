import { useEffect } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import css from './HomeView.module.scss';
import routes from '../../routes';
import { usersSls, usersOps } from '../../redux/users';
import { Container } from '../../components/common';
import { UserTable } from '../../components/home';

const HomeView = () => {
    const users = useSelector(usersSls.getSortedUsersWithStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        users.forEach(({ id, isActive }) => {
            if (isActive === undefined) {
                dispatch(usersOps.getUserStatus(id));
            }
        });
    }, [users.length]);

    return (
        <Container>
            <h1 className={css.pageTitle}>Главная страница</h1>

            <UserTable />

            <div className={css.buttonWrapper}>
                <Button component={Link} to={routes.addUser}>
                    Добавить пользователя
                </Button>
            </div>
        </Container>
    );
};

export default HomeView;
