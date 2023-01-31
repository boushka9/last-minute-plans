$(document).ready(function () {
  // pull from location bar run JS
  function getParams() {
    // Get the search params out of the URL (i.e. ?q=london&format=photo) and convert it to an array (i.e. ['?q=london', 'format=photo'])
    var searchParamsArr = document.location.search.split("&");

    //console.log(searchParamsArr);

    // Get the query and format values
    healthChoice = searchParamsArr[0].split("=").pop();
    region = searchParamsArr[1].split("=").pop();
    genreSelect = searchParamsArr[2].split("=").pop();
    console.log(genreSelect);
    recipeApiRequest(healthChoice, region);
    movieApiRequest(genreSelect);
  }

  // create var that keeps appending w/ string at the very end use .innerHTML=
  async function recipeApiRequest() {
    let recipeResults = await fetch(
      "https://api.edamam.com/api/recipes/v2?type=public&app_id=782a382f&app_key=44f8de3e7cf221622c3c1749bba1ae0d&health" +
        healthChoice +
        "&cuisineType=" +
        region
    );
    //console.log(recipeResults);
    let recipeResponse = await recipeResults.json();
    console.log(recipeResponse);
    useRecipeResponse(recipeResponse);
  }
  //Create function to fetch movie by genre search
  async function movieApiRequest() {
    let movieResults = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=1d3ebfae33dc1dce90cd215a42f368a5&with_genres=" +
        genreSelect
    );
    let movieResponse = await movieResults.json();
    console.log(movieResponse);
    useMovieResponse(movieResponse);
  }

  // Create a function that takes data from recipeApiRequest and creates a card to dislay on results.html
  function useRecipeResponse(recipeResponse) {
    document.querySelector("#recipe-container").innerHTML = `
  <div id="recipe-container">
  <article id="recipe-rec">
    <img class="recipe-img" src="${recipeResponse.hits[0].recipe.image}">
    <div class="card-bottom">
      <div class="recipe-name">
        <p>${recipeResponse.hits[0].recipe.label}</p>
        <i class="fa-solid fa-square-plus"></i>
      </div>
      <a class="text" class="recipe-description" href="${recipeResponse.hits[0].recipe.shareAs}" target="_blank"> Click here to see Recipe (draft... Sam I expect better letter combinations tomorrow) </a>
    </div> 
  </article>
</div>
`;
  }
  // Same as recipe but movies to results.html
  function useMovieResponse(movieResponse) {
    document.querySelector("#movie-container").innerHTML = `
  <div id="movie-container">
  <article class=movie-rec">
      <img class="movie-img" src="https://image.tmdb.org/t/p/original${movieResponse.results[0].poster_path}">
      <div class="card-bottom">
        <div class="movie-name">
          <p>${movieResponse.results[0].title}</p>
          <i class="fa-solid fa-square-plus"></i>
        </div>
        <p class="text" class="movie-description">${movieResponse.results[0].overview}</p>
      </div>  
  </article>
</div>
`;
  }

  getParams();
});
