const searchBtn = document.getElementById("search")
const movieName = document.getElementById("movie-name")
const moviesData = document.getElementById("movies-data")
const moviesEmptyList = document.getElementById("display-none")

const check =  document.getElementsByClassName("movie-time")

let moviesDomList = ''
let moviesImdbId = []

searchBtn.addEventListener("click", async function () {

    moviesEmptyList.style.display = "none"
    moviesData.style.display = "block"

    const res = await fetch(`https://www.omdbapi.com/?apikey=e7cba977&s=${movieName.value}`)
    const data = await res.json()

    console.log(data)

    for (let i of data.Search) {
        moviesImdbId.push(i.imdbID)

        moviesDomList += `
                <div id="movies" class="movies-container">
                    <img src="${i.Poster}" class="poster-img"> 
                        <div class="movies-card">
                            <p>${i.Title} <span id="rating">⭐</span> </p> 
                            <div>
                                <span class="movie-time"></span> <span id="genre">Action</span>
                            </div>
                           
                            <p id="plot">A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.</p>
                        </div>
                </div>
                `
    }

    moviesData.innerHTML = moviesDomList
    console.log(moviesImdbId)


    for (let i=0; i< moviesImdbId.length; i++) {

        const response = await fetch(`https://www.omdbapi.com/?apikey=e7cba977&i=${i}`)
        const zee = await response.json()

        console.log(zee.Runtime)
        
       check[i].innerHTML = zee.Runtime
    }
})

