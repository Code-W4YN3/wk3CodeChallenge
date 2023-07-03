addEventListener('DOMContentLoaded', () => {
  listMovies()
  displayFirst()
})
//displays list of movies
function listMovies(){
  fetch('http://localhost:3000/films')
  .then(res => res.json())
  .then(data => data.forEach(film => {
    let movieList = document.getElementById('films')
    let movie = document.createElement('button')
    movie.className='movieButton'
    movie.id= `movie${film.id}`
    movie.innerText = `${film.id}. ${film.title}`
    movieList.appendChild(movie)
  }))
}
//renders the first movie upon loading of the page
function displayFirst(){
  fetch('http://localhost:3000/films/1')
  .then(res => res.json())
  .then(postMovie)
  console.log('added first')
}

function postMovie(item){
  //renders the movie image
  document.getElementById('movieImage').setAttribute("src", `${item.poster}`)
  //calculates available tickets
  let AvailableTick = (item.capacity - item.tickets_sold)
  //renders the movie details
  document.getElementById('movieDetails').innerHTML=`
  <h4>${item.title}</h4>
  <p>Showtime: ${item.showtime}</p>
  <p>Runtime: ${item.runtime} Minutes</p>
  <p>${item.description}</p>
  <p> Available Tickets: <span id=tracker>${AvailableTick}</span> </p>
  <button id="buy"> Buy Ticket </button>
  `
  //adds a buy button and listens for clicks
  let span =document.getElementById("tracker")
  let button = document.getElementById("buy")
  button.addEventListener('click', tickets)
// limits reduction of available tickets to 0
  function tickets(){
    console.log(span.innerText)
    if(span.innerText > 0){
      span.innerText = span.innerText-1
    }
  }
}



