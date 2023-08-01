import logo from './logo.svg';
import './App.css';

//components
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn how to slang donuts
        </a>
      </header>
    </div>
  );
}

export default App;
