//https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50

const getApiData = () => {
  return fetch(
    'https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50'
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const dataClean = data.map((movie) => {
        return {
          image: movie.poster,
          title: movie.movie,
          year: movie.year,
          phrase: movie.full_line,
          audio: movie.audio,
        };
      });
      return dataClean;
    });
};
export default getApiData;
