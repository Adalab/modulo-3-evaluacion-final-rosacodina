//https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50

function getApiData = () => {
    return fetch ('https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50')
    .then((response) => response.json())
    .then((data) => {
        const dataClean = data.movie.map((movie)=> {
            return {
                id: movie.movie,
                year: movie.year,
                phrase: movie.fullline,
                audio: movie.audio,
            };
        });
        return dataClean;
    });
};
export default getApiData;