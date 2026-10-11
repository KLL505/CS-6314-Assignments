// Write your netid here: kll200003
// Implement the movie search and Add to Watchlist functionality in this file.

const API_KEY = "39e27558";
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const movieList = document.getElementById('movieList');
const message = document.getElementById('message');

searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const query = searchInput.value.trim();
  
  if (!query) {
    message.textContent = "Please enter a movie title.";
    movieList.innerHTML = "";
    return;
  }
  
  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
    const data = await response.json();
    console.log(data);
    if (data.Response === "True") {
      message.textContent = "";
      renderMovies(data.Search);
    } else {
      message.textContent = data.Error;
    }
  } catch (error) {
    message.textContent = "An error occurred while fetching data. Please try again.";
  }
});

function renderMovies(movies) {
  movies.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    
    const posterImg = movie.Poster !== "N/A" 
      ? `<img src="${movie.Poster}" alt="${movie.Title} Poster">` 
      : `<div style="width: 100px; flex-shrink: 0;"></div>`;

    card.innerHTML = `
      ${posterImg}
      <div class="movie-info">
        <h5>${movie.Title}</h5>
        <p>Year: ${movie.Year}</p>
        <p>Type: ${movie.Type}</p>
        <button class="add-btn" data-id="${movie.imdbID}">Add to Watchlist</button>
      </div>
    `;
    
    movieList.appendChild(card);
    
    const addBtn = card.querySelector('.add-btn');
    addBtn.addEventListener('click', () => addToWatchlist(movie));
  });
}

function addToWatchlist(movieToAdd) {
  let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
  const isDuplicate = watchlist.some(movie => movie.imdbID === movieToAdd.imdbID);
  
  if (!isDuplicate) {
    watchlist.push(movieToAdd);
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    alert(`${movieToAdd.Title} has been added to your watchlist!`);
  } else {
    alert(`${movieToAdd.Title} is already in your watchlist.`);
  }
}