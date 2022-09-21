import React from "react";
import { actors } from "../data";

const actorsList = actors.map((actor) => {
  return (
    <div key={actor.name}>
      <h2>{actor.name}</h2>
      <ul>
        {actor.movies.map((movie) => <li key={movie}>{movie}</li>)}
      </ul>
    </div>
  )
});

function Actors() {
  return (
    <div>{/*{code here}*/}
      <h1>Actors Page</h1>
      {actorsList}
    </div>
  );
}

export default Actors;