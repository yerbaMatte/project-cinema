export const moviesId = [
  1893, 672, 77338, 497, 238, 120, 475557, 9732, 111, 13223, 808, 98,
];

export const fetchMovieDetails = (movieId) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmNkYTI3MjcwNjg4NmY5MDI4ZTI3NmViZWJkOTAyNCIsInN1YiI6IjY0NWQ0Yjk5YWQ1MGYwMDE1NTNiY2E4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q5tL_uBRgonxxrhbRGVKGiGuGx979vx_hMu8sAp4b8U',
    },
  };

  fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

// Fetch details for each movie ID
moviesId.forEach((movieId) => {
  fetchMovieDetails(movieId);
});
