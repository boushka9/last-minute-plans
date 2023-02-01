$(document).ready(function () {
  // pull from location bar run JS
  function getParams() {
    // Get the user selected vaules from the url bar and put them in an array
    var searchParamsArr = document.location.search.split("&");

    //console.log(searchParamsArr);

    // Use data from searchParamsArr and store it in variables for the API requests to use
    healthChoice = searchParamsArr[0].split("=").pop();
    region = searchParamsArr[1].split("=").pop();
    genreSelect = searchParamsArr[2].split("=").pop();
    recipeApiRequest(healthChoice, region);
    movieApiRequest(genreSelect);
  }

  // create var that keeps appending w/ string at the very end use .innerHTML=

  // function submits request based on users choices to edamam API and returns a response
  async function recipeApiRequest() {
    let recipeResults = await fetch(
      "https://api.edamam.com/api/recipes/v2?type=public&app_id=782a382f&app_key=44f8de3e7cf221622c3c1749bba1ae0d&mealType=Dinner&dishType=Main%20course&health=" +
        healthChoice +
        "&cuisineType=" +
        region
    );
    var recipeResponse = await recipeResults.json();
    console.log(recipeResponse);
    useRecipeResponse(recipeResponse);
  }

  //Create function to fetch movie by genre search
  async function movieApiRequest() {
    let movieResults = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=1d3ebfae33dc1dce90cd215a42f368a5&with_genres=" +
        genreSelect
    );
    var movieResponse = await movieResults.json();
    console.log(movieResponse);
    useMovieResponse(movieResponse);
  }
  //for loop for multiple cards... tbd

  // Create a function that takes data from recipeApiRequest and creates a card to dislay on results.html
  function useRecipeResponse(recipeResponse) {
    //for (var i = 0; i < 5; i++) {
      document.querySelector(".recipe-container-0").innerHTML = `
  <div id="recipe-container">
  <article id="recipe-rec">
    <img class="recipe-img" src="${recipeResponse.hits[0].recipe.image}">
    <div class="card-bottom">
      <div class="recipe-name">
        <p>${recipeResponse.hits[0].recipe.label}</p>
        <i class="fa-solid fa-square-plus"></i>
      </div>
      <a class="text" class="recipe-description" href="${recipeResponse.hits[0].recipe.shareAs}" target="_blank"> Take me to Recipe</a>
    </div> 
  </article>
</div>
`;
document.querySelector(".recipe-container-1").innerHTML =
`<div id="recipe-container">
  <article id="recipe-rec">
    <img class="recipe-img" src="${recipeResponse.hits[1].recipe.image}">
    <div class="card-bottom">
      <div class="recipe-name">
        <p>${recipeResponse.hits[1].recipe.label}</p>
        <i class="fa-solid fa-square-plus"></i>
      </div>
      <a class="text" class="recipe-description" href="${recipeResponse.hits[1].recipe.shareAs}" target="_blank"> Take me to Recipe</a>
    </div> 
  </article>
</div>
`;
document.querySelector(".recipe-container-2").innerHTML =
`<div id="recipe-container">
  <article id="recipe-rec">
    <img class="recipe-img" src="${recipeResponse.hits[2].recipe.image}">
    <div class="card-bottom">
      <div class="recipe-name">
        <p>${recipeResponse.hits[2].recipe.label}</p>
        <i class="fa-solid fa-square-plus"></i>
      </div>
      <a class="text" class="recipe-description" href="${recipeResponse.hits[2].recipe.shareAs}" target="_blank"> Take me to Recipe</a>
    </div> 
  </article>
</div>
`;
document.querySelector(".recipe-container-3").innerHTML =
`<div id="recipe-container">
  <article id="recipe-rec">
    <img class="recipe-img" src="${recipeResponse.hits[3].recipe.image}">
    <div class="card-bottom">
      <div class="recipe-name">
        <p>${recipeResponse.hits[3].recipe.label}</p>
        <i class="fa-solid fa-square-plus"></i>
      </div>
      <a class="text" class="recipe-description" href="${recipeResponse.hits[3].recipe.shareAs}" target="_blank"> Take me to Recipe</a>
    </div> 
  </article>
</div>
`;
document.querySelector(".recipe-container-4").innerHTML =
`<div id="recipe-container">
  <article id="recipe-rec">
    <img class="recipe-img" src="${recipeResponse.hits[4].recipe.image}">
    <div class="card-bottom">
      <div class="recipe-name">
        <p>${recipeResponse.hits[4].recipe.label}</p>
        <i class="fa-solid fa-square-plus"></i>
      </div>
      <a class="text" class="recipe-description" href="${recipeResponse.hits[4].recipe.shareAs}" target="_blank"> Take me to Recipe</a>
    </div> 
  </article>
</div>
`;}
    //};

  
  // Same as recipe but movies to results.html
  function useMovieResponse(movieResponse) {
    //for (var i = 0; i < 5; i++) {
    document.querySelector(".movie-container-0").innerHTML = 
    `<div id="movie-container">
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
document.querySelector(".movie-container-1").innerHTML = `
  <div id="movie-container">
  <article class=movie-rec">
      <img class="movie-img" src="https://image.tmdb.org/t/p/original${movieResponse.results[1].poster_path}">
      <div class="card-bottom">
        <div class="movie-name">
          <p>${movieResponse.results[1].title}</p>
          <i class="fa-solid fa-square-plus"></i>
        </div>
        <p class="text" class="movie-description">${movieResponse.results[1].overview}</p>
      </div>  
  </article>
</div>
`;
document.querySelector(".movie-container-2").innerHTML = `
  <div id="movie-container">
  <article class=movie-rec">
      <img class="movie-img" src="https://image.tmdb.org/t/p/original${movieResponse.results[2].poster_path}">
      <div class="card-bottom">
        <div class="movie-name">
          <p>${movieResponse.results[2].title}</p>
          <i class="fa-solid fa-square-plus"></i>
        </div>
        <p class="text" class="movie-description">${movieResponse.results[2].overview}</p>
      </div>  
  </article>
</div>
`;
document.querySelector(".movie-container-3").innerHTML = `
<div id="movie-container">
<article class=movie-rec">
    <img class="movie-img" src="https://image.tmdb.org/t/p/original${movieResponse.results[3].poster_path}">
    <div class="card-bottom">
      <div class="movie-name">
        <p>${movieResponse.results[3].title}</p>
        <i class="fa-solid fa-square-plus"></i>
      </div>
      <p class="text" class="movie-description">${movieResponse.results[3].overview}</p>
    </div>  
</article>
</div>
`;
document.querySelector(".movie-container-4").innerHTML = `
  <div id="movie-container">
  <article class=movie-rec">
      <img class="movie-img" src="https://image.tmdb.org/t/p/original${movieResponse.results[4].poster_path}">
      <div class="card-bottom">
        <div class="movie-name">
          <p>${movieResponse.results[4].title}</p>
          <i class="fa-solid fa-square-plus"></i>
        </div>
        <p class="text" class="movie-description">${movieResponse.results[4].overview}</p>
      </div>  
  </article>
</div>
`;
    }
 // }
  getParams();
});