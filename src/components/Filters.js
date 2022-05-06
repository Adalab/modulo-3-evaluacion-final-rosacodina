import MovieFilter from './MovieFilter';

function Filters(props) {
  return (
    <section className="filters">
      <form>
        <MovieFilter
          handleMovieFilter={props.handleMovieFilter}
          movieFilter={props.movieFilter}
        />
      </form>
    </section>
  );
}

export default Filters;
