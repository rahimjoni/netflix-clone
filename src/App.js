import logo from './logo.svg';
import './App.css';
import Row from "./components/Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title="Treading Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movie" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movie" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movie" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movie" fetchUrl={requests.fetchRomanceMovies}/>
    </div>
  );
}

export default App;
