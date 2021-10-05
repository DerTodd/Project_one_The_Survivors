let search; 
let recipesArray = [];
const recipeContainer = $("#search-results-container1");
const recipeEl = $("#recipe");

const recipeSearch = (searchBar) => {

fetch("https://edamam-recipe-search.p.rapidapi.com/search?q="+searchBar, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
		"x-rapidapi-key": "669d5b1b04msh355ab578e9da7d2p10cf56jsn3370f7327c12"
	}
})

.then(function(response) {
	let searchResults = $("#search-results");
    recipesArray = response.recipes;
    console.log(response);

    // css within java for display of recipes
    searchResults.empty();
    recipeContainer.css('display', 'block');
    recipeEl.css('display','none')

    // create an error notification in case there are no results
    if (recipesArray === null) {
        const noResults = $("<p>").text('No results could be found.');
        $("#search-results").append(noResults);
    }

    // search history function 
    let searchHistory = [];

    function saveHistory () {
        var recipeSearched = JSON.parse(localStorage.getItem("searchHistory"));
        if (recipeSearched !== null) {
            searchHistory = recipeSearched;
        } else {
        // else staement 
        // for loop so there is max of recipes in history
        for (i = 0; i < 4; i++) {
        searchHistory();
        }
    }
}
})
}
