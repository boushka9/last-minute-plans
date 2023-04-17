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

    //get the button by id 
    $("#clearBtn").click(function(){
        $("#clearModal").css("display", "block");
    });
    
    //when clicking the span id "close," the modal goes invisible 
    $(".close").click(function(){
        $("#clearModal").css("display", "none");
    });

    //when clicking anywhere outside of the window, the modal goes invisible
    $(window).click(function(event){
        if(event.target == $("#clearModal")){
            $("#clearModal").css("display", "none");
        }
    });

     //when you click the "whoops" button, the modal disappears
     $("#no").click(function(){
        $("#clearModal").css("display", "none")
     })

     //when you click the "Proceed" button, the modal disappears and the local storage is cleared
     $("#yes").click(function(){
        $("#clearModal").css("display", "none");
        localStorage.removeItem("pastSearch");
        $("#stored-searches").empty();
     })

  
   //create event listener for the choiceBtn, change html location and call recipeApiRequest
   $("#choiceBtn").on("click", async () => {
     var diet = document.getElementById("dietaryRestrictions");
     var cuisineType = document.getElementById("cuisineType");
     var healthChoice = diet.value;
     var region = cuisineType.value;
     var genre = document.getElementById("movieGenre");
     var genreSelect = genre.value;
      document.location.assign('./results.html?healthChoice=' + healthChoice + '&region=' + region + '&genreSelect=' + genreSelect);
     await Promise.race([recipeApiRequest(), movieApiRequest()]);
      useRecipeResponse();
      useMovieResponse();
   });
 
 
 });
