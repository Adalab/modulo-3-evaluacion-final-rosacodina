import MovieFilter from './MovieFilter';
import YearFilter from './YearFilter';

function Filters(props) {
  return (
    <section className="filters">
      <form>
        <MovieFilter
          handleMovieFilter={props.handleMovieFilter}
          movieFilter={props.movieFilter}
        />
        <YearFilter
          getYear={props.getYear}
          handleYearFilter={props.handleYearFilter}
        />
      </form>
    </section>
  );
}

export default Filters;
