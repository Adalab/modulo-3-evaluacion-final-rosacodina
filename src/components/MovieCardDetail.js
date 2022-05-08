function MovieCardDetail(props) {
  return (
    <section>
      (<img src={props.movie.poster} />
      <p>{props.movie.title} </p>
      <p>{props.movie.year}</p>
      <p>{props.movie.full_line}</p>
      <p>{props.movie.audio}</p>
      );
    </section>
  );
}

export default MovieCardDetail;
