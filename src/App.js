import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routes';

import { UserContextProvider } from 'contexts/User';

import logo from 'assets/images/logo.svg';
import './App.scss';

function App() {
  return (
    <UserContextProvider>
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
    </UserContextProvider>
  );
}

export default App;
