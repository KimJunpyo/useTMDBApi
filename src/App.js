import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MovieList from "./Pages/MovieList";
import DetailMovie from "./Pages/DetailMovie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/detail" element={<DetailMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
