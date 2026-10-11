// Write your netid here: kll200003

// Implement the watchlist display and Remove functionality in this file.

const movieList = document.getElementById('movieList');
const message = document.getElementById('message');

document.addEventListener('DOMContentLoaded', loadWatchlist);

function loadWatchlist() {
  const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
  console.log(watchlist);
  movieList.innerHTML = "";
  
  if (watchlist.length === 0) {
    message.textContent = "Your watchlist is currently empty.";
    return;
  }
  
  message.textContent = "";
  
  watchlist.forEach(movie => {
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
        <button class="remove-btn" data-id="${movie.imdbID}">Remove</button>
      </div>
    `;
    
    movieList.appendChild(card);
    
    const removeBtn = card.querySelector('.remove-btn');
    removeBtn.addEventListener('click', () => removeFromWatchlist(movie.imdbID));
  });
}

function removeFromWatchlist(imdbID) {
  let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
  watchlist = watchlist.filter(movie => movie.imdbID !== imdbID);
  localStorage.setItem('watchlist', JSON.stringify(watchlist));

  loadWatchlist();
}