import React from 'react';

function Food({favourite}) {
  return (
  <h1>I like {favourite}</h1>
  );
}

function Sport(props) {
  var {eve} = props; 
  return <h3>I Like {eve}</h3>;
}

function App() {
  return (
    <div>
    <h1>hello!!!</h1>
    <Food favourite="kimchi" />
    <Food favourite="ramen" />
    <Food favourite="samgiopsal" />
    <Food favourite="cukumi" />

    <Sport eve= "soccer" />
    <Sport eve= "baseball" />
    </div>
  );
}

export default App;
