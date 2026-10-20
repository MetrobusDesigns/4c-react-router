import { Link } from "react-router";

const Games = ({ games }) => {
  return (
    <>
      <h2>List of Games</h2>
      <ol>
        {games.map((game) => (
          <li>
            <h3>{game.title}</h3>
          </li>
        ))}
      </ol>
      <Link to="/newgame">
        <button>Add New Game</button>
      </Link>
    </>
  );
};

export default Games;