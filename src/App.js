
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
const App = () => {
  //bearer  is a type of access token used in HTTP requests that indicates that the request is authorized with a token

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/anime`);
        setanimeDate(response.data)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }

    fetchAnimeData()
  }, [])
  const [animeDate, setanimeDate] = useState([])
  return (
    <>
      <div className="App">
        <h1>Anime-app</h1>
        <ul>
          {animeDate.map(anime => (
            <div className="list">
              <p>hype:{anime.hype}</p>
              <h4>{anime.studio}</h4>
              <h3>{anime.title.text}</h3>
              <p>{anime.description.substr(0, 200)}...</p>
              <p>{anime.genres.join(',')}</p>
              <p>start time:{anime.start_date}</p>
              <a href={anime.title.link}>More Info</a>
            </div>
          ))}
        </ul>

      </div>
    </>
  );
}

export default App;
