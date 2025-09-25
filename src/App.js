import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Oh awesome, I just figured out how to deploy a React app to my GitHub Pages.
        </p>
        <p>
          Please stay tuned, there's more where this came from.
        </p>
        <a
          className="App-link"
          href="https://github.com/dburgnerjr/react-test-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to GitHub Repo
        </a>
      </header>
    </div>
  );
}

export default App;
