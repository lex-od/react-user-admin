import { Route, Switch } from 'react-router';
import { HomeView } from '../views';
import routes from '../routes';

const App = () => {
    return (
        <Switch>
            <Route path={routes.addUser}>
                <div>Добавление юзера</div>
            </Route>

            <Route path={routes.editUser}>
                <div>Редактирование юзера</div>
            </Route>

            <Route path={routes.home}>
                <HomeView />
            </Route>
        </Switch>
    );
};

export default App;
