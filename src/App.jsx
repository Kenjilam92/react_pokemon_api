import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [something,setSomething] = useState([])

  const handleButton = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964")
      .then(res => res.json())
      .then(res => setSomething(res.results))
      .catch(err =>{console.log(err);});
  }          

  return (
    <div className="jumbotron">
      <h3>This is the result</h3>
      <button className="btn-success" onClick={handleButton}>Fetch Pokemon</button>
      <div className="d-flex flex-wrap">
        {something.map((pokemon,i)=>{
          return(
          <p key = {i} className="bg-info" style={{margin: '5px', color: 'white', padding: '5px'}}>
            {i+1}) {pokemon.name} 
          </p>
          );
        })}
      </div>
    </div>
  );  
}

export default App;
