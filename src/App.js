import { BrowserRouter as Router } from 'react-router-dom';
import UserApi from 'adapters/api/user';
import Routes from 'routes';

import { UserContextProvider } from 'contexts/User';

import logo from 'assets/images/logo.svg';
import './App.scss';

function App() {
  // TODO: Remove this, only for testing
  const getUser = async () => {
    try {
      const {
        data: { attributes: user },
      } = await UserApi.getProfile();

      console.log(`Get user success ${user}`);
    } catch (error) {
      console.log('Get user error');
    }
  };

  return (
    <UserContextProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" onClick={getUser} />
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
