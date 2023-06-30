addEventListener('DOMContentLoaded', () => {
  listMovies()
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