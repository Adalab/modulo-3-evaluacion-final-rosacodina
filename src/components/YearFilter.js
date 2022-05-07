function YearFilter(props) {
  const handleChange = (ev) => {
    props.handleYearFilter(ev.target.value);
  };
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
      <select onChange={handleChange} value={'year'}>
        <option value="">Year of the film</option> {renderYears()}
      </select>
    </>
  );
}

export default YearFilter;
