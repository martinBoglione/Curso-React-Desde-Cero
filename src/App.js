import React from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";

import { Link, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/messi">Gifs de messi</Link>
        <Link to="/gif/maradona">Gifs de maradona</Link>
        <Link to="/gif/boca juniors">Gifs de boca</Link>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
