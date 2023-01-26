$(document).ready(function () { 


 //THIS FUNCTION TO RESULTS.JS PAGE, WHEN RESULTS ARE RENDERED, BUTTON CAN BE CLICKED    
    // On click, if item is not included in
    $("#favorite-btn").on("click", (event) => {
        event.preventDefault();
        // If city name is not in cityHistory, add it to localStorage with key favorite to retrieve value
        if (favoriteHistory.includes(itemName) === false) {
            favoriteHistory.push(itemName);
            localStorage.setItem("favorite", JSON.stringify(favoriteHistory));
        }
    })

    // on page load, for each savedItem i of favoriteHistory, run func to render
    for (var i = 0; i < favoriteHistory.length; i++) {
        renderFavorites(favoriteHistory[i]);
    }

    function renderFavorites(favCards) {
        let favItem = $("<div>").addClass("fav-item").text(favCards);
        $("saved-container").append(favItem);
    }

    













});