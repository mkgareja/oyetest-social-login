import logo from './logo.svg';
import './App.css';
// Import Parse minified version
import Parse from 'parse/dist/parse.min.js';

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = '0VWhf3TtEH0dubHhFEp5V9y0dxyXKTOL53oaOtm5';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'ADeVUrFJiooeqp4geOxS3Y4f25oTCTbThehuG4n4';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

function App() {
  return (
    <div className="App">
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
