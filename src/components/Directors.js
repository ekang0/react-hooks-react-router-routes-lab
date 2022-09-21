import React from "react";
import { directors } from "../data";

const directorsList = directors.map((director) => {
  return (
    <div key={director.name}>
      <h2>{director.name}</h2>
      <ul>
        {director.movies.map((movie) => <li key={movie}>{movie}</li>)}
      </ul>
    </div>
  )
});

function Directors() {
  return (
  <div>{/*{code here}*/}
    <h1>Directors Page</h1>
    {directorsList}
  </div>
  );
}

export default Directors;