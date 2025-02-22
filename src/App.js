import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import tora from "./utils/tora.png";

function App() {
  return (
    <div className="App">
      <Header />
      <img src={tora} style={{ height: "750px", width: "500px" }} />
      {/* <img src={logo} className="App-logo" alt="logo" />
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
      </a> */}
    </div>
  );
}

export default App;
