function CardMovie(props) {
  return (
    <a>
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
          <a>{props.movie.audio}</a>
        </div>
      </section>
    </a>
  );
}

export default CardMovie;
