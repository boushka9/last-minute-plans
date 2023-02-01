$(document).ready(function () { 

    let searchHistory = JSON.parse(localStorage.getItem("pastSearch")) || [];

    //on submit, get content of input boxes via getRecipePerams() and store them in local storage
    $("#choiceBtn").on("click", (event) => {
        event.preventDefault();
        getSearchPerams();

        //if searchHistory doesn't include that searchPeram, add it to localStorage
        if (searchHistory.includes(searchPeram) === false) {
            searchHistory.push(searchPeram);
            localStorage.setItem("pastSearch", JSON.stringify(searchHistory));
        }
        //ignore already rendered searchHistory items, and render the next on click
        $("#stored-searches").html("");
        for (var i = 0; i < searchHistory.length; i++) {
            renderHistory(searchHistory[i]);
        }
    
    })

    // Get value of input boxes and format return
    function getSearchPerams() {
        cuisineType = $("#cuisineType option:selected").text(); //the values for this one are all lowercase for the api, so getting the selected text for caps
        diet = $("#dietaryRestrictions").val();
        movie = $("#movieGenre option:selected").text(); // api = values are numbers, return selected option text

        searchPeram = ("Cuisine Type: " + cuisineType + " + " + "Dietary Restrictions: " + diet + " + " + "Movie Genre: " + movie);
        
        return searchPeram;  
    }

    
    //on page load, run renderHistory for each item of showHistory 
    for (var i = 0; i < searchHistory.length; i++) {
        renderHistory(searchHistory[i]);
    }

    //for each item of showHistory, create a list item and append it to the ul in HTML
    function renderHistory(item) {
        let searchItem = $("<li>").addClass("search-li").text(item);
        $("#stored-searches").append(searchItem);
    
    }

    // clear local storage on click
    $("#clear").on("click", () => {
        localStorage.removeItem("pastSearch");
        $("#stored-searches").empty();
    })


    //create variables to plug into the fetch request for API's based on selections made by user
    let simpleSearch = document.getElementById("choiceBtn");
      
     
    
    //create event listener for the choiceBtn and call recipeApiRequest
    
    simpleSearch.addEventListener("click", () => {
         //console.log(healthChoice + " " + region);
         //console.log(genreSelect);
        recipeApiRequest();
        movieApiRequest();
        //window.location.href = "results.html";
        useRecipeResponse();
        useMovieResponse();
    });
    
       //Create async function recipeApiRequest
    async function recipeApiRequest() {
        let diet = document.getElementById("dietaryRestrictions");
        let cuisineType = document.getElementById("cuisineType");
        let healthChoice = diet.value;
        let region = cuisineType.value;
        let recipeResults = await fetch(
          "https://api.edamam.com/api/recipes/v2?type=public&app_id=782a382f&app_key=44f8de3e7cf221622c3c1749bba1ae0d&health=" + healthChoice + "&cuisineType=" + region);
        //console.log(recipeResults);
        let recipeResponse = await recipeResults.json();
        console.log(recipeResponse);
        useRecipeResponse(recipeResponse)
    }
     //Create function to fetch movie by genre search
    async function movieApiRequest () {
         let genre = document.getElementById("movieGenre");
         let genreSelect = genre.value;
         let movieResults = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=1d3ebfae33dc1dce90cd215a42f368a5&with_genres=" + genreSelect)
         let movieResponse = await movieResults.json();
         console.log(movieResponse);
         useMovieResponse(movieResponse)
    }
    
     // Create a function that takes data from recipeApiRequest and creates a card to dislay on results.html
    function useRecipeResponse(recipeResponse){
      document.querySelector("#recipe-container").innerHTML = `
      <div id="recipe-container">
      <article id="recipe-rec">
        <img class="recipe-img" src="${recipeResponse.hits[0].recipe.image}">
        <div class="card-bottom">
          <div class="recipe-name">
            <p>${recipeResponse.hits[0].recipe.label}</p>
            <i class="fa-solid fa-square-plus"></i>
          </div>
          <a class="text" class="recipe-description" href="${recipeResponse.hits[0].recipe.shareAs}"> Click here to see Recipe (draft... Sam I expect better letter combinations tomorrow) </a>
        </div> 
      </article>
    </div>
    `
     }
    // Same as recipe but movies to results.html
     function useMovieResponse(movieResponse){
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
    `
     }
    
   




});