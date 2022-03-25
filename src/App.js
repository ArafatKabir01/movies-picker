
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [movies , setMovies] = useState([]);
  useEffect(()=>{
    fetch('movies.json')
    .then(res => res.json())
    .then(data => setMovies(data))
  },[])
  return (
    <div className="App">
      <h2>{movies.length}</h2>
      {
        movies.map(movie => <img src={movie.img} alt=''></img>)
        
      }


    </div>
  );
}

export default App;
