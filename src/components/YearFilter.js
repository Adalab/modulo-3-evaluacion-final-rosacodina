function YearFilter(props) {
  const handleChange = (ev) => {
    props.handleYearFilter(ev.target.value);
  };
  //To take the clean list with just the film years
  const renderYears = () => {
    return props.getYear.map((year, index) => {
      return (
        <option key={index} value={year}>
          {year}
        </option>
      );
    });
  };
  return (
    <>
      <select onChange={handleChange}>
        <option value="all">Year of the film</option> {renderYears()}
      </select>
    </>
  );
}

export default YearFilter;
