import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1>React Recipes</h1>
      <a target="_blank" rel="noopener noreferrer" href="http://www.edamam.com/">
        Powered by Edamam
      </a>
      and <a target="_blank" rel="noopener noreferrer" href="http://www.whisk.com/">
         by Whisk
      </a>
    </div>
  );
}

export default Jumbotron;
