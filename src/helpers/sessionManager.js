const USER = 'user';

const sessionManager = () => {
  const setUser = ({ email, avatar_url: avatarUrl }) => {
    localStorage.setItem(
      USER,
      JSON.stringify({ email: email, avatarUrl: avatarUrl })
    );
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
