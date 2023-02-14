import React, { useState, useEffect } from "react";
import "./App.css";


const url = 'https://api.giphy.com/v1/gifs/search?api_key=GZbFtMqmfJaKLrAjqo4fczj17AmGHt7V&q=messi&limit=10&offset=0&rating=g&lang=en'

function App() {
  const [gifs, setGifts] = useState[];

  useEffect(function () {
    setGifts(differentGifs);
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        {gifs.map((singleGif) => (
          <img src={singleGif} alt="messi" />
        ))}
      </section>
    </div>
  );
}

export default App;
