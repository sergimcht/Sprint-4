// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const allDirectors = array.map(directoresFilter => directoresFilter.director)
  console.log("EXERCISE 1 ->", allDirectors);
  return allDirectors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const moviesFromDirector = array.filter(directoresFilter => directoresFilter.director === director)
  console.log("EXERCISE 2 ->", moviesFromDirector);
  return moviesFromDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let number = 0;
  let arrayDirector = [];
  if (director == null) {
    arrayDirector = array
  } else {
    arrayDirector = array.filter(directoresFilter => directoresFilter.director === director)
  }
  const totalScore = arrayDirector.reduce((allScores, movies) => {
    if (movies.score !== "") {
      number++
      allScores += movies.score
    }
    return allScores
  }, 0)
  let averageScore = Number((totalScore / number).toFixed(2));
  console.log("EXERCISE 3 ->", averageScore);
  return averageScore;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const moviesOrdered = array.map(peliculasFilter => peliculasFilter.title).sort().slice(0, 20)
  console.log("EXERCISE 4 ->", moviesOrdered);
  return moviesOrdered;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const moviesOrderedYear = [...array].sort((a, b) => (a.year > b.year) ? 1 : (a.year === b.year) ? ((a.title > b.title) ? 1 : -1) : -1 )
  console.log("EXERCISE 5 ->", moviesOrderedYear);
  return moviesOrderedYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const arrayGenre = array.filter(genreFilter => genreFilter.genre.includes(genre));
  let averageScoreGenre = moviesAverageOfDirector(arrayGenre)
  console.log("EXERCISE 6 ->", averageScoreGenre);
  return averageScoreGenre;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  //const copyArray = array.map((films => films))

  const arrayMap = array.map((movie) => {
    return {...movie, duration: changeDuration(movie.duration) };
  });
  console.log("EXERCISE 7 ->", arrayMap);
  return arrayMap;
}

function changeDuration(campDuration) {
  const arrayDuration = campDuration.split(" ");
  let durationHours = 0;
  let durationMinutes = 0;
  

  if (arrayDuration.length === 2) {
    durationHours = parseInt(arrayDuration[0]);
    durationMinutes = parseInt(arrayDuration[1]);
  } else {
    if ((arrayDuration[0]).includes("h") === true) {
      durationHours = parseInt(arrayDuration[0]);
    } else if ((arrayDuration[0]).includes("min") === true) {
      durationMinutes = parseInt(arrayDuration[0]);
    }
  }
    let totalDuration = durationHours * 60 + durationMinutes;
    return totalDuration;

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const arrayFilterYear = array.filter((movies => movies.year === year));
  const bestFilmYear = (arrayFilterYear.sort((a, b) => (a.score > b.score) ? -1 : 1 )).slice(0, 1);
  console.log("EXERCISE 8 ->", bestFilmYear);
  return bestFilmYear;
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
