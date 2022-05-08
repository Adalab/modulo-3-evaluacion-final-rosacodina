import { Link } from 'react-router-dom';

function CardMovie(props) {
  return (
    <Link to={`/movie/${props.movie.id}`}>
      <section className="card">
        <div>
          <img
            className="card__image"
            alt={props.movie.image}
            src={props.movie.image}
          />
        </div>

        <div className="card__details">
          <h2>{`${props.movie.title} ${props.movie.year}`}</h2>
          <p>{props.movie.phrase}</p>
          <p>{props.movie.audio}</p>
        </div>
      </section>
    </Link>
  );
}

export default CardMovie;
