var foodnowButton = document.getElementById("starving");
var recipe = document.getElementById("name");
var api = "49f3da27c23f6a2b713252c89ab419d6";
var applicationId = "0ab5a438";





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


function getFoodChoice() {
    recipeTrim = recipe.value.trim();
    recipeNoSpace= recipeTrim.split(' ').join('_');
    recipeSelected = recipeNoSpace.toLowerCase();
    //remove the spaces https://stackoverflow.com/questions/441018/replacing-spaces-with-underscores-in-javascript
    console.log("Recipes " + recipeSelected);
    //retrieve any stored items from local storage and assign to data create new variable and add it to anything already there
    var data = JSON.parse(localStorage.getItem("data")) || [];
    var dataEntry = {
        recipe: recipeSelected,
    };
    data.push(dataEntry);
    // save to local storge
    localStorage.setItem("data", JSON.stringify(data))
    localStorage.setItem("recipes", JSON.stringify(recipeSelected));
    console.log(recipeSelected);
    //example https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=0ab5a438&app_key=49f3da27c23f6a2b713252c89ab419d6
fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${recipeSelected}&app_id=0ab5a438&app_key=49f3da27c23f6a2b713252c89ab419d6`)
.then(function (response) {
    return response.json();
    })
// .catch(err => {
// 	console.error(err);
// });
.then(function (data) {
    console.log(data)
    console.log("food check " + data.hits[0].recipe.label);
    var foods = [];
    var foodO = {};
        var foodChoice = {
            name : data.hits[0].recipe.label,
            instructions : data.hits[0].recipe.url,
            image : data.hits[0].recipe.image,
            ingredient1 : data.hits[0].recipe.ingredientLines[0],
            ingredient2 : data.hits[0].recipe.ingredientLines[1],
            ingredient3 : data.hits[0].recipe.ingredientLines[2],
            ingredient4 : data.hits[0].recipe.ingredientLines[3],
            ingredient5 : data.hits[0].recipe.ingredientLines[4],
            ingredient6 : data.hits[0].recipe.ingredientLines[5],
            ingredient7 : data.hits[0].recipe.ingredientLines[6],
            ingredient8 : data.hits[0].recipe.ingredientLines[7],
            ingredient9 : data.hits[0].recipe.ingredientLines[8],
            ingredient10 : data.hits[0].recipe.ingredientLines[9],
            ingredient11 : data.hits[0].recipe.ingredientLines[10],
            ingredient12 : data.hits[0].recipe.ingredientLines[11],
            ingredient13 : data.hits[0].recipe.ingredientLines[12]
        };
        console.log(foodChoice);
        for (let index = 0; index < 5; index++) {
            //var topFoodChoice = foods[index];
            foodO= {
                nameFood : data.hits[index].recipe.label,
                instructions : data.hits[index].recipe.url,
                image : data.hits[index].recipe.image,
                ingredient1 : data.hits[index].recipe.ingredientLines[0],
                ingredient2 : data.hits[index].recipe.ingredientLines[1],
                ingredient3 : data.hits[index].recipe.ingredientLines[2],
                ingredient4 : data.hits[index].recipe.ingredientLines[3],
                ingredient5 : data.hits[index].recipe.ingredientLines[4],
                ingredient6 : data.hits[index].recipe.ingredientLines[5],
                ingredient7 : data.hits[index].recipe.ingredientLines[6],
                ingredient8 : data.hits[index].recipe.ingredientLines[7],
                ingredient9 : data.hits[index].recipe.ingredientLines[8],
                ingredient10 : data.hits[index].recipe.ingredientLines[9],
                ingredient11 : data.hits[index].recipe.ingredientLines[10],
                ingredient12 : data.hits[index].recipe.ingredientLines[11],
                ingredient13 : data.hits[index].recipe.ingredientLines[12]
            };
            console.log(foodO);
            foods.push(foodO);
            console.log(foods);
            foodArray = [foodO.ingredient1, foodO.ingredient2, foodO.ingredient3, foodO.ingredient4, foodO.ingredient5, foodO.ingredient6, foodO.ingredient7, foodO.ingredient8, foodO.ingredient9, foodO.ingredient10, foodO.ingredient11, foodO.ingredient12, foodO.ingredient13,]
            console.log(foodArray);
            var imgh2 = document.createElement('h2');
                imgh2.textContent = data.hits[index].recipe.label;
                document.getElementById('mealChoice').appendChild(imgh2); 
            
            var img = document.createElement('img');
                img.id = "Image" + index
                img.src = foodO.image;
                img.alt = foodO.nameFood;
                img.width = 200;
                img.height = 200;
                document.getElementById('mealChoice').appendChild(img); 
            var imga = document.createElement('a');
                imga.textContent = data.hits[index].recipe.label;
                imga.href = data.hits[index].recipe.url;
                document.getElementById('mealChoice').appendChild(imga);
            var imgul = document.createElement('ul');
                imgul.id = "List" + index;
                document.getElementById('mealChoice').appendChild(imgul);
                //document.getElementById("mealChoice").href = data.hits[index].recipe.url;
                for (let i = 0; i < 15; i++) {
                    const ingredFood = foodArray[i];
                    //const ident = identList[index];
                    if(ingredFood !== null && ingredFood !== "" && ingredFood !== undefined){
                    //var iList =
                    //document.getElementById("ingredUL").appendChild(ident).textContent = "Ingredient: " + ingred + " "
                    var iFoodList = document.createElement('li');
                    iFoodList.textContent = ingredFood;
                    document.getElementById(imgul.id).appendChild(iFoodList); 
                    };
                };
            
            }return foods;
            //console.log(foods); 
            
        
});
};
//Kick this thing off!
foodnowButton.addEventListener('click', function(event) {
    alert("Hi, I'm a submit button! " + event.target.tagName);
    //clearDiv("ingredUL");
    //clearDiv("measUL");
    clearUl("mealChoice");
    getFoodChoice();
});
function clearUl(elementID) {
    var ul = document.getElementById(elementID);
    
    while(ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
}