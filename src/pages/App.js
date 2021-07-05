import logo from '../styles/logo.svg';
import '../styles/App.css';
import { FaLinkedin } from 'react-icons/fa'; //importação de icones
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FaLinkedin src= {logo} className="App-logo" alt="logo" />
    
        <p>
          Welcome the my linkedin.
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/ednavan-lima/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LOGIN
        </a>
      </header>
    </div>
  );
}

export default App;
