import { useContext } from 'react';
import Auth from 'helpers/auth';
import UserContext from 'contexts/User';

const SurveyList = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogOut = async (event) => {
    event.preventDefault();

    try {
      await Auth.logout();
      setUser(null);
    } catch (error) {
      // TODO: Handling error
    }
  };

  return (
    <div className="screen screen__survey-list">
      <div className="user-profile">
        <img src={user.avatarUrl} />
        <span>{user.email}</span>
        <a href="#" onClick={handleLogOut}>
          Logout
        </a>
      </div>
    </div>
  );
};

export default SurveyList;
