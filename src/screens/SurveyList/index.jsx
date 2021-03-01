import { useContext } from 'react';

import { UserContext } from 'contexts/User';
import Auth from 'helpers/auth';

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
        <img src={user.avatarUrl} alt="avatar" />
        <span>{user.email}</span>
        <button type="button" onClick={handleLogOut}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default SurveyList;
