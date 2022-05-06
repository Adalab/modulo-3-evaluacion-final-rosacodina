function YearFilter(props) {
  const renderYears = () => {
    return props.getYear.map((year) => {
      return <option></option>;
    });
  };
  return (
    <>
      <select>
        <option value="">Year of the film</option> {renderYears()}
      </select>
    </>
  );
}

export default YearFilter;
