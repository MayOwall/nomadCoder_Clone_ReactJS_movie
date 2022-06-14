import Lec4 from "../components/Lec4"
import {useState, useEffect} from "react"

function Home() {
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

  return <Lec4 movies={movies} loading={loading}/>
}

export default Home;