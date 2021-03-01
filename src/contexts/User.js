import React, { useState } from 'react';

import sessionManager from 'helpers/sessionManager';

const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(sessionManager.getUser());

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
