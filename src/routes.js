import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from 'components/ProtectedRoute';
import Login from 'screens/Login';
import SurveyList from 'screens/SurveyList';

const Routes = () => (
  <Switch>
    <Route path="/login">
      <Login />
    </Route>
    <ProtectedRoute path="/">
      <SurveyList />
    </ProtectedRoute>
  </Switch>
);

export default Routes;
