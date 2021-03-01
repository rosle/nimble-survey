const USER = 'user';

const sessionManager = () => {
  const setUser = (user) => {
    localStorage.setItem(USER, JSON.stringify(user));
  };

  const getUser = () => {
    return JSON.parse(localStorage.getItem(USER));
  };

  const clearSession = () => {
    localStorage.removeItem(USER);
  };

  return {
    setUser,
    getUser,
    clearSession,
  };
};

export default sessionManager();
