import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import WatchFlim from "./Layout/Frontend/WatchFlim";
import Home from "./Layout/Frontend/Home";
import Text from "./Layout/Frontend/Text";
import FilmDetail from "./Layout/Frontend/FilmDetail";
import MovieManage from "./Layout/Backend/MovieManage";
import Login from "./Layout/Login/Login";
import Register from "./Layout/Login/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        {/* Login */}
        {/* Frontend */}
        <Route path="/" Component={Home} />
        <Route path="/home" Component={Home} />
        <Route path="/flim/:id" Component={FilmDetail} />
        <Route path="/watchflim/:id" Component={WatchFlim} />
        {/* Frontend */}
        {/* Backend */}
        <Route path="/moviemanager" Component={MovieManage} />
        {/* Backend */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
