import logo from 'assets/images/logo.svg';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routes';
import { useState } from 'react';
import UserContext from 'contexts/User';
import sessionManager from 'helpers/sessionManager';

function App() {
  const [user, setUser] = useState(sessionManager.getUser());

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <main>
            <Routes />
          </main>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
