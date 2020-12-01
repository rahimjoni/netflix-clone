import logo from './logo.svg';
import './App.css';
import Row from "./components/Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Treading Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
