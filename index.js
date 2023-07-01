addEventListener('DOMContentLoaded', () => {
  listMovies()
  displayFirst()
})

function listMovies(){
  fetch('http://localhost:3000/films')
  .then(res => res.json())
  .then(data => data.forEach(film => {
    let movieList = document.getElementById('films')
    let movie = document.createElement('button')
    movie.className='movieButton'
    movie.id= `${film.id}`
    movie.innerText = `${film.id}. ${film.title}`
    movieList.appendChild(movie)
  }))
}

function displayFirst(){
  fetch('http://localhost:3000/films/1')
  .then(res => res.json())
  .then(postMovie)
  console.log('added first')
}
function postMovie(item){
  document.getElementById('movieImage').setAttribute("src", `${item.poster}`)
  let AvailableTick = (item.capacity - item.tickets_sold)
  document.getElementById('movieDetails').innerHTML=`
  <h4>${item.title}</h4>
  <p>Showtime: ${item.showtime}</p>
  <p>Runtime: ${item.runtime} Minutes</p>
  <p>${item.description}</p>
  <p> Available Tickets: <span id=tracker>${AvailableTick}</span> </p>
  <button id="buy"> Buy Ticket </button>
  `
  let button = document.getElementById("buy")
  button.addEventListener('click', tickets)
  function tickets(){
    let span =document.getElementById("tracker")
    console.log(span.innerText)
    span.innerText = span.innerText-1
    console.log(span.innerText)
  }
}