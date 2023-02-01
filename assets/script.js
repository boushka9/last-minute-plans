$(document).ready(function () {
  //   const RECIPE_KEY = config.EDAMAM_KEY;
  //   const RECIPE_ID = config.EDAMAM_ID;
  //   const MOVIE_KEY = config.TMDB_KEY
   //create variable to input btn for request
     //let simpleSearch = document.getElementById("choiceBtn");
   
  
   //create event listener for the choiceBtn and call recipeApiRequest
 
   $("#choiceBtn").on("click", async () => {
     var diet = document.getElementById("dietaryRestrictions");
     var cuisineType = document.getElementById("cuisineType");
     var healthChoice = diet.value;
     var region = cuisineType.value;
     var genre = document.getElementById("movieGenre");
     var genreSelect = genre.value;
      document.location.assign('./../results.html?healthChoice=' + healthChoice + '&region=' + region + '&genreSelect=' + genreSelect);
     await Promise.race([recipeApiRequest(), movieApiRequest()]);
      useRecipeResponse();
      useMovieResponse();
   });
 
 
 });

