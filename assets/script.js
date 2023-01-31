$(document).ready(function () {
//   const RECIPE_KEY = config.EDAMAM_KEY;
//   const RECIPE_ID = config.EDAMAM_ID;
//   const MOVIE_KEY = config.TMDB_KEY
  //create variables to plug into the fetch request for API's based on selections made by user
  let simpleSearch = document.getElementById("choiceBtn");
  let diet = document.getElementById("dietaryRestrictions");
  let cuisineType = document.getElementById("cuisineType");
  let healthChoice = diet.value;
  let region = cuisineType.value;

  //create event listener for the choiceBtn and call recipeApiRequest

  simpleSearch.addEventListener("click", () => {
    console.log(healthChoice + " " + region);
    recipeApiRequest();
    movieApiRequest();
  });

  // Create async function recipeApiRequest
  async function recipeApiRequest() {
    let recipeResults = await fetch(
      "https://api.edamam.com/api/recipes/v2?type=public&app_id=782a382f&app_key=44f8de3e7cf221622c3c1749bba1ae0d&health=" + healthChoice + "&cuisineType=" + region);
    console.log(recipeResults);
    let recipeResponse = await recipeResults.json();
    console.log(recipeResponse);
  }
  //Create function to fetch movie by genre search
  async function movieApiRequest () {
     let genre = document.getElementById()

     let movieResults = await fetch("https://api.themoviedb.org/3/movie/550?api_key=1d3ebfae33dc1dce90cd215a42f368a5&genres=" + genreSelect)
     let movieResponse = await movieResults.json();
     console.log(movieResponse);
   }

});

