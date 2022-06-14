import { useState, useEffect } from 'react'

const Lec4 = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`);
    const json = await response.json();

    setMovies(json.data.movies.slice(0,3));
    setLoading(false);
  }

  useEffect(() => {
    getMovies()
  }, []);

  console.log(movies);

  return (<div>
    {loading ? <h1>Loading...</h1> : movies.map(movie => <div key={movie.id}>
      <h2>{movie.title}</h2>
      <img src={movie.medium_cover_image} />
      <p>{movie.summary}</p>
      <ul>
        {movie.genres.map((g) => <li key={g}>{g}</li>)}
      </ul>
      </div>
      )}
  </div>)
}

export default Lec4;