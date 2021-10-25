import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import css from './HomeView.module.scss';
import routes from '../../routes';
import { Container } from '../../components/common';
import { UserTable } from '../../components/home';

const HomeView = () => {
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
