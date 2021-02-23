import logo from 'assets/images/logo.svg';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routes';

function App() {
  return (
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
  );
}

export default App;
