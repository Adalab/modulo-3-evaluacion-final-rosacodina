function MovieFilter(props) {
  //This const is a lifting and it does the function located in App, line 15 const handleMovieFilter
  const handleChange = (ev) => {
    props.handleMovieFilter(ev.target.value);
  };

  return (
    <>
      <input
        className="input"
        placeholder="Write the film name you want to find"
        type="text"
        onChange={handleChange}
        value={props.movieFilter}
      ></input>
    </>
  );
}

export default MovieFilter;
