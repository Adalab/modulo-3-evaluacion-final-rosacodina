import CardMovie from './CardMovie';

function MovieList(props) {
  const movieElements = props.movies.map((movie, index) => {
    return (
      <li className="card" key={index}>
        <CardMovie movie={movie} />
      </li>
    );
  });
  return (
    <section>
      <ul>{movieElements}</ul>
    </section>
  );
}

export default MovieList;
