import {Link} from "react-router-dom";

const Lec4 = ({ movies, loading }) => {
  
  return (<div>
    {loading ? <h1>Loading...</h1> : movies.map(movie => <div key={movie.id}>
      <h2><Link to="/movie">{movie.title}</Link></h2>
      <img src={movie.medium_cover_image} alt="그림임" />
      <p>{movie.summary}</p>
      <ul>
        {movie.genres.map((g) => <li key={g}>{g}</li>)}
      </ul>
      </div>
      )}
  </div>)
}

export default Lec4;