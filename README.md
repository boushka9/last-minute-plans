# Last Minute Plans

## Description

Last Minute Plans is an app to put an end to the age old question, "I don't know, what do you want to do?"

<img src="readmeassets/home.png" alt="Last Minute Plans Home Page" width="300"/>

To generate recipes and movie suggestions, you have the option of generating a set of plans specific to a cuisine and a genre respectively. 

<img src="readmeassets/options.png" alt="Last Minute Plans Option Select" width="300"/>

Your results will be displayed on the next page.

<img src="readmeassets/resultspage.png" alt="Your Results" width="300"/>

Our application is designed to take out the pressure and hassle of deciding what to cook and what to watch so you can spend more time enjoying your evening. 

One challenge of creating this app was found in displaying results from the recipe and movie APIs. The ability to automate the API on a button click came down to crafting functions to apply the selected options on the main page with query selectors. 
We struggled to implement a functional for loop to render 6 items from the API return data. In the end, we successfully added a for loop to create more efficiency and smoothness in rendering. 
An additional challenge of this project was working with Materialize CSS. Uncovering the quirks of this technology was essential to the final aesthetic and feature functionality of the app itself. 
After running into several issues initializing Materialize CSS Dropdown menus, the team discovered that they could revert back to their original HTML structure by using option select menus, an alternative form of dropdown menu styled by Materialize CSS. When the app looks good, so does our last-minute casanova.

For future versions of this application, we would like to add a "Feeling Frisky," button, which would generate a random combination of movie and recipe, for the truly undecided or adventurous user. 
We would also like to implement a “Favorites” page using local storage to keep track of all the good plans you’ve made before.

As it stands, Last Minute Plans is your go-to for a nice date night in. The fill-in-the-blanks for the uninspired, and the spice for the thrill-seeker, Last Minute Plans provides a unique experience for all.


## Installation

No installation is neccessary for this app. Access the application at https://boushka9.github.io/last-minute-plans/ 


## Wire Frames and User Story

### User Story
As a couple with no plans
I want to see suggested recipes and movies
So that we can make date plans at the last minute

### Acceptance Criteria
GIVEN I am presented with the Last Minute Plans application,
WHEN I select search criteria for dinner and a movie,
THEN I am presented with 5 recipes and 5 movie suggestions
WHEN I click the option to randomize selection,
THEN I am presented with one movie/dinner combination
WHEN I click the option to save a recipe or movie to My Favorites
THEN My selections will appear on the "My Favorites Page" in the app


### Wire Frames
<img src="readmeassets/LMPMain.jpg" alt="Main Page" width="300"/>
Last Minute Plans Main Page

<img src="readmeassets/LMPResults.jpg" alt="Results Page" width="300"/>
Last Minute Plans Results Page

<img src="readmeassets/LMPFavorites.jpg" alt="Favorites Page" width="300"/>
Last Minute Plans Favorites Page


## Authors

* Emma Boushka - Administrator, Graphic Design, Javacript, CSS, Local Storage
* Joshua Boren - API selection, implementation, and activation, JavaScript
* Christian Killelea - HTML and Front End design
* Samantha Gosselin - Front End Assistance, Modal Notifications, Materialize Integration, presentation and ReadMe


## Version History

* 0.1
    * Initial Release


## Acknowledgments

Inspiration, code snippets, etc.
* [awesome-readme](https://github.com/matiassingers/awesome-readme)
* [Materialize for CSS](https://materializecss.com/)
* [Edimam](https://www.edamam.com/)
* [The Movie Database API](https://www.themoviedb.org/)
* [W3 Schools "How to CSS/Modal"](https://www.w3schools.com/howto/howto_css_modals.asp)
* [Challenge 6, the Weather App Project](https://boushka9.github.io/rainy-plastic-plants/)
