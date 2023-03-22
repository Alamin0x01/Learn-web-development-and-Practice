import logo from "./logo.svg";
import "./App.css";

const number = 4444;
const singer = { name: "Dr. Rakib", job: "Developer" };
const singer2 = { name: "eva rohman", job: "singer2" };

const singerStyle = {
  color: "purple",
  backgroundColor: "white",
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>Hello Jsx, Have nice day!</h3>
        </div>

        <div className="music">
          <p>Numbers: {number + 2222}</p>
          <p style={singerStyle}>
            Name: {singer.name} - {singer.job}
          </p>
          <p style={{ color: "red" }}>
            Name: {singer2.name} - {singer2.job}
          </p>
        </div>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
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
