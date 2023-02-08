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


  // Create a function that takes data from recipeApiRequest and creates a card to dislay on results.html
  function useRecipeResponse(recipeResponse) {
    //variable for empty div's in html for for loop to loop over
    const recipeCards = document.querySelectorAll(".recipe-container");
    for (var i = 0; i < recipeCards.length; i++) {
      recipeCards[i].innerHTML = "";

      //set img to img element and append to empty string
      let recipeImg = recipeResponse.hits[i].recipe.image;
      let recipeImgEl = document.createElement("img");
      recipeImgEl.setAttribute("src", recipeImg);
      recipeCards[i].append(recipeImgEl);

      //set recipe name as p element and append to empty string
      let recipeName = recipeResponse.hits[i].recipe.label;
      let recipeNameEl = document.createElement("p");
      recipeNameEl.innerHTML = recipeName;
      recipeCards[i].append(recipeNameEl);

      //set recipe link as a element and append to empty string
      let recipeLink = recipeResponse.hits[1].recipe.shareAs;
      let recipeLinkEl = document.createElement("a");
      recipeLinkEl.setAttribute("href", recipeLink);
      recipeLinkEl.innerHTML = "See full recipe";
      recipeCards[i].append(recipeLinkEl); 
    }
    ;}

  
     // Same as recipe but movies 
    function useMovieResponse(movieResponse) {
      const movieCards = document.querySelectorAll(".movie-container");
      for (var i = 0; i < movieCards.length; i++) {
        movieCards[i].innerHTML = "";

        let movieImg = movieResponse.results[i].poster_path;
        let movieImgEl = document.createElement("img");
        movieImgEl.classList.add("size-img");
        movieImgEl.setAttribute("src", "https://image.tmdb.org/t/p/original" + movieImg);
        movieCards[i].append(movieImgEl);

        let movieName = movieResponse.results[i].title;
        let movieNameEl = document.createElement("p");
        movieNameEl.classList.add("movie-name");
        movieNameEl.innerHTML = movieName;
        movieCards[i].append(movieNameEl);

        let movieDescript = movieResponse.results[i].overview;
        let movieDescriptEl = document.createElement("p");
        movieDescriptEl.innerHTML = movieDescript;
        movieCards[i].append(movieDescriptEl);
      }
    }

  getParams();
});