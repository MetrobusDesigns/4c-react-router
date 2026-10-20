import { Route, Routes } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";
import NavBar from "./components/NavBar";
import Games from "./components/Games";
import { useState } from "react";
import NewGame from "./components/NewGame";

function App() {
  const [games, setGames] = useState([
    {
      id: 1,
      title: "Pokemon Gold",
      genre: "RPG",
      platform: "Game Boy",
    },
    {
      id: 2,
      title: "Final Fantasy 7",
      genre: "RPG",
      platform: "Playstation",
    },
    {
      id: 3,
      title: "Resident Evil Requiem",
      genre: "Horror",
      platform: "PC",
    },
  ]);

  const addGame = (game) => {
    setGames([...games, game])
  }

  return (
    <>
      <h1>4C - React Router</h1>
      <NavBar />
      {/* the Routes section allows us to add different individual Route elements that work as different pages for our application*/}
      {/* Each Route tag takes in a url string path and the element we want to display when the URL matches that path */}
      {/* <Route path="url" element={<Component />} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/games" element={<Games games={games} />} />
        <Route path="/newgame" element={<NewGame />} />
      </Routes>
    </>
  );
}

export default App;
