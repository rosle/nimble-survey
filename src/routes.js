import { Route, Switch } from 'react-router-dom';
import Login from 'screens/Login';

const Routes = () => (
  <Switch>
    <Route path="/">
      <Login />
    </Route>
  </Switch>
);

export default Routes;
