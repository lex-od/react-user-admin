import { Route, Switch } from 'react-router';
import { HomeView, AddUserView, EditUserView } from '../views';
import routes from '../routes';

const App = () => {
    return (
        <Switch>
            <Route path={routes.addUser}>
                <AddUserView />
            </Route>

            <Route path={routes.editUser}>
                <EditUserView />
            </Route>

            <Route path={routes.home}>
                <HomeView />
            </Route>
        </Switch>
    );
};

export default App;
