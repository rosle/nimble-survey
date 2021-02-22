import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import UserContext from 'contexts/User';

const ProtectedRoute = ({ children, ...rest }) => {
  const { user } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={() => {
        return user ? children : <Redirect to="/login" />;
      }}
    ></Route>
  );
};

export default ProtectedRoute;
