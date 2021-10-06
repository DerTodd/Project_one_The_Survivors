let search; 
let recipesArray = [];
//const recipeEl = $("#recipe");
var searchHistory = [];
var starvingButton = document.getElementById("#starving");

// get history function instead of const. b/c it wont be called again 
function getItem() {
    var storedRecipe = JSON.parse(localStorage.getItem("search-history"));
    if (storedRecipe !== null) {
        storedRecipe = searchHistory;
    };
// creatign a for loop so that there is a max of 6 meals recipes. 
    for (i = 0; i < searchHistory.length; i++) {
        if (i == 6) {
        break;
    }
    getrecipeBtn = $("<a>").attr({
        class: "collection-item",
        href: "#"
    });
    getrecipeBtn.text(searchHistory[i]);
    (".list-group").append(getrecipeBtn)
    }
};

var recipe

getItem();

function getData() {
    var queryURL = "https://edamam-recipe-search.p.rapidapi.com/search?q=" + recipe + "&appid=669d5b1b04msh355ab578e9da7d2p10cf56jsn3370f7327c12"
    // clear themain container
    recipeContainer.empty();
    $("#cocktailRecipe").empty();

    // jquery pull 
    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response) {
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
    })
}

$("#searchRecipe").click(function() {
    recipe= $("#recipe").val();
    getData();
    var checkArray = searchHistory.includes(recipe);
    if (checkArray == true) {
        return
    }
    else {
        searchHistory.push(recipe);
        localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
        var getrecipeBtn = $("<a>").attr({
            
            class: "collection-item",
            href: "#"
        });
        getrecipeBtn.text(recipe);
        $(".list-group").append(getrecipeBtn);
    };
});
// listens for action on the history buttons
$("collection-item").click(function() {
    recipe = $(this).text();
    getData();
});

