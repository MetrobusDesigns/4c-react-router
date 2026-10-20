import { useState } from "react";

const NewGame = ({ addGame }) => {
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    platform: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(updatedFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // set up new game object
    const newGame = {
        id: Date.now(),
        title: formData.title,
        genre: formData.genre,
        platform: formData.platform
    }

    // add it to our games array
    addGame(newGame)
  }

  return (
    <>
      <h2>Add a Game</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div>
          <label>Genre: </label>
          <input name="genre" value={formData.genre} onChange={handleChange} />
        </div>
        <div>
          <label>Platform: </label>
          <input
            name="platform"
            value={formData.platform}
            onChange={handleChange}
          />
        </div>
        <button>Add Game</button>
      </form>
    </>
  );
};

export default NewGame;

