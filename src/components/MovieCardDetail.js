function MovieCardDetail(props) {
  return;

  <section>
    <img>{props.movie.poster}</img>
    <p>{props.movie.title} </p>
    <p>{props.movie.year}</p>
    <p>{props.movie.full_line}</p>
    <p>{props.movie.audio}</p>
  </section>;
}

export default MovieCardDetail;
