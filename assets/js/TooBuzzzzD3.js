var data;
var oldDrinks = [];
var oldFood = [];

function tooBuzzD() {
    data = JSON.parse(localStorage.getItem("data")) || [];
    console.log(data);
    //var oldDrinks = [];
    var oldDrinksO = data;
    console.log(oldDrinksO)
    var old_list =data[0].drink;
    console.log(old_list);
    for (let index = 0; index < oldDrinksO.length ; index++) {
        if(data[index].drink !== undefined && data[index].drink !== "") {
        var old_search = data[index].drink;
        oldDrinks.push(old_search);
        console.log(old_search);
        console.log(oldDrinks);
    }
    };
    //removed duplicates inspired by geeks for geeks https://www.geeksforgeeks.org/how-to-remove-duplicate-elements-from-array-in-javascript/
    console.log(oldDrinks);
    let unique_drinks = [];
    oldDrinks.forEach((c) => {
        if (!unique_drinks.includes(c)) {
        unique_drinks.push(c);
        }
    });
    console.log(unique_drinks);
    for (let i = 0; i < unique_drinks.length; i++) {
        var newButtonsDrinks = unique_drinks[i];
        if(newButtonsDrinks !== null && newButtonsDrinks !== "" && newButtonsDrinks !== undefined)
        var newId = "drinkbutton" + i;
        console.log(newId);
        var drinkBtn = document.createElement('button');
            drinkBtn.textContent = newButtonsDrinks;
            drinkBtn.type = "submit";
            drinkBtn.id = "drinkbutton" + i;
            drinkBtn.style.backgroundColor = "#D92929"
            drinkBtn.style.color ="White"
            drinkBtn.style.borderRadius = "12px"
            drinkBtn.style.padding ="20px"
            drinkBtn.style.margin =".5em"
            drinkBtn.style.border ="none"
            drinkBtn.style.font= "bold 1.25rem/1 montserrat";
            drinkBtn.style.color= "white";
            document.getElementById('hitMeAgain').appendChild(drinkBtn); 
            console.log(newId);
            document.getElementById(newId).addEventListener("click", function(event) {
            // alert("Hi, I'm a submit button! " + event.target.tagName);
            makeDrinks(this)
            
            });
    };


};
function makeDrinks(el) {
    // alert (el.textContent);
    var drinkaLittleDrink = el.textContent;
    console.log(drinkaLittleDrink)
    anotherRound(drinkaLittleDrink);
    };

function anotherRound(drinkaLittleDrink) {
    drinkSelected = drinkaLittleDrink;
    console.log("Drink " + drinkSelected);
fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkSelected}`)
.then(function (response) {
    return response.json();
    })
// .catch(err => {
// 	console.error(err);
// });
.then(function (data) {
    console.log(data)
    console.log("drink check " + data.drinks[0].strDrink)
    var drinkChoice = {
        name : data.drinks[0].strDrink,
        instructions : data.drinks[0].strInstructions,
        image : data.drinks[0].strDrinkThumb,
        ingredient1 : data.drinks[0].strIngredient1,
        measurement1 : data.drinks[0].strMeasure1,
        ingredient2 : data.drinks[0].strIngredient2,
        measurement2 : data.drinks[0].strMeasure2,
        ingredient3 : data.drinks[0].strIngredient3,
        measurement3 : data.drinks[0].strMeasure3,
        ingredient4 : data.drinks[0].strIngredient4,
        measurement4 : data.drinks[0].strMeasure4,
        ingredient5 : data.drinks[0].strIngredient5,
        measurement5 : data.drinks[0].strMeasure5,
        ingredient6 : data.drinks[0].strIngredient6,
        measurement6 : data.drinks[0].strMeasure6,
        instructions : data.drinks[0].strInstructions
    };
    var ingredList =[
        data.drinks[0].strIngredient1,
        data.drinks[0].strIngredient2,
        data.drinks[0].strIngredient3,
        data.drinks[0].strIngredient4,
        data.drinks[0].strIngredient5,
        data.drinks[0].strIngredient6,
        data.drinks[0].strIngredient7,
        data.drinks[0].strIngredient8,
        data.drinks[0].strIngredient9,
        data.drinks[0].strIngredient10,
        data.drinks[0].strIngredient11,
        data.drinks[0].strIngredient12,
        data.drinks[0].strIngredient13,
        data.drinks[0].strIngredient14,
        data.drinks[0].strIngredient15
        
    ];
    var measurements = [
        data.drinks[0].strMeasure1,
        data.drinks[0].strMeasure2,
        data.drinks[0].strMeasure3,
        data.drinks[0].strMeasure4,
        data.drinks[0].strMeasure5,
        data.drinks[0].strMeasure6,
        data.drinks[0].strMeasure7,
        data.drinks[0].strMeasure8,
        data.drinks[0].strMeasure9,
        data.drinks[0].strMeasure10,
        data.drinks[0].strMeasure11,
        data.drinks[0].strMeasure12,
        data.drinks[0].strMeasure13,
        data.drinks[0].strMeasure14,
        data.drinks[0].strMeasure15
    ] 

    var combinedList= [
        data.drinks[0].strIngredient1 + ": " + data.drinks[0].strMeasure1,
        data.drinks[0].strIngredient2 + ": " + data.drinks[0].strMeasure2,
        data.drinks[0].strIngredient3 + ": " + data.drinks[0].strMeasure3,
        data.drinks[0].strIngredient4 + ": " + data.drinks[0].strMeasure4,
        data.drinks[0].strIngredient5 + ": " + data.drinks[0].strMeasure5,
        data.drinks[0].strIngredient6 + ": " + data.drinks[0].strMeasure6,
        data.drinks[0].strIngredient7 + ": " + data.drinks[0].strMeasure7,
        data.drinks[0].strIngredient8 + ": " + data.drinks[0].strMeasure8,
        data.drinks[0].strIngredient9 + ": " + data.drinks[0].strMeasure9,
        data.drinks[0].strIngredient10 + ": " + data.drinks[0].strMeasure10,
        data.drinks[0].strIngredient11 + ": " + data.drinks[0].strMeasure11,
        data.drinks[0].strIngredient12 + ": " + data.drinks[0].strMeasure12,
        data.drinks[0].strIngredient13 + ": " + data.drinks[0].strMeasure13,
        data.drinks[0].strIngredient14 + ": " + data.drinks[0].strMeasure14,
        data.drinks[0].strIngredient15 + ": " + data.drinks[0].strMeasure15
    ]
    console.log(combinedList);
    console.log(ingredList);
    console.log(measurements);
    console.log(drinkChoice);
    console.log(drinkChoice.ingredient2);
    console.log(drinkChoice.ingredient3);
    console.log(drinkChoice.ingredient4);
    console.log(drinkChoice.image);
    clearDiv("ingredUL");
    clearDiv("measUL");
    clearDiv("image1");
    clearDiv("instructions");
    clearDiv("drinkName");
    document.getElementById("drinkName").textContent = drinkChoice.name;
    document.getElementById("instructions").textContent = "Instructions: " + drinkChoice.instructions;
    
    var img = document.createElement('img');
        img.src = drinkChoice.image;
        img.alt = "Picture of cocktail";
        img.width = 250;
        img.height = 250;
        document.getElementById('image1').appendChild(img);   
    for (let index = 0; index < 15; index++) {
        const ingred = combinedList[index];
        //const ident = identList[index];
        if(ingred !== null && ingred !== "null: null"){
        //var iList =
        //document.getElementById("ingredUL").appendChild(ident).textContent = "Ingredient: " + ingred + " "
        var iList = document.createElement('li');
        iList.textContent = ingred.replace(/null/g, "");
        document.getElementById('ingredUL').appendChild(iList); 
        };
    };

    // for (let index = 0; index < 15; index++) {
    //     const measu = measurements[index];
    //     //const identm = measList[index];
    //     if(measu !== null){
    //     //document.getElementById("ingredUL").appendChild(identm).textContent = "Measurment: " + measu + " ";
    //     var mlist = document.createElement('li');
    //     mlist.textContent = measu;
    //     document.getElementById('measUL').appendChild(mlist)
    //     };
    // };
});
};

function tooFull() {
    data = JSON.parse(localStorage.getItem("data")) || [];
    console.log(data);
    var old_food_list =data;
    console.log(old_food_list);
    for (let index = 0; index < old_food_list.length; index++) {
        if(data[index].recipe !== undefined && data[index].recipe !== "") {
        var old_search_Food = data[index].recipe;
        oldFood.push(old_search_Food);
        console.log(old_search_Food);
        console.log(oldFood);
    };
};
    console.log(oldFood);
    var unique_recipes = [];
    oldFood.forEach((c) => {
        if (!unique_recipes.includes(c)) {
        unique_recipes.push(c);
        }
    });
    for (let i = 0; i < unique_recipes.length; i++) {
        var newButtonsFood = unique_recipes[i];
        if(newButtonsFood !== null && newButtonsFood !== "" && newButtonsFood !== undefined)
        var newIdF = "foodbutton" + i;
        console.log(newIdF);
        var foodBtn = document.createElement('button');
            foodBtn.textContent = newButtonsFood;
            foodBtn.type = "submit";
            foodBtn.id = "foodbutton" + i;
            foodBtn.style.backgroundColor = "#D92929"
            foodBtn.style.color ="White"
            foodBtn.style.border ="none"
            foodBtn.style.borderRadius = "12px"
            foodBtn.style.padding ="20px"
            foodBtn.style.margin =".5em"
            foodBtn.style.font= "bold 1.25rem/1 montserrat";
            foodBtn.style.color= "white";
            document.getElementById('feedMe').appendChild(foodBtn); 
            console.log(newIdF);
            document.getElementById(newIdF).addEventListener("click", function(event) {
            //alert("Hi, I'm a submit button! " + event.target.tagName);
            makeFood(this)
            
            });
    };


};
function makeFood(el) {
    //alert (el.textContent);
    var eataLittleEat = el.textContent;
    console.log(eataLittleEat)
    foodIsGood(eataLittleEat);
    };
function foodIsGood(eataLittleEat) {
    var foodSelected = eataLittleEat;
    console.log("Food " + foodSelected);
fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${foodSelected}&app_id=0ab5a438&app_key=49f3da27c23f6a2b713252c89ab419d6`)
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
        for (let index = 0; index < 1; index++) {
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
            clearDiv("oldFoodChoice")
            var imgh2 = document.createElement('h2');
                imgh2.textContent = data.hits[index].recipe.label;
                document.getElementById('oldFoodChoice').appendChild(imgh2); 
            
            var img = document.createElement('img');
                img.id = "Image" + index
                img.src = foodO.image;
                img.alt = foodO.nameFood;
                img.width = 200;
                img.height = 200;
                document.getElementById('oldFoodChoice').appendChild(img); 
            var imga = document.createElement('a');
                imga.textContent = data.hits[index].recipe.label;
                imga.href = data.hits[index].recipe.url;
                document.getElementById('oldFoodChoice').appendChild(imga);
            var imgulF = document.createElement('ul');
                imgulF.id = "List" + index;
                document.getElementById('oldFoodChoice').appendChild(imgulF);
                //document.getElementById("oldFoodChoice").href = data.hits[index].recipe.url;
                for (let i = 0; i < 15; i++) {
                    const ingredFood = foodArray[i];
                    //const ident = identList[index];
                    if(ingredFood !== null && ingredFood !== "" && ingredFood !== undefined){
                    //var iList =
                    //document.getElementById("ingredUL").appendChild(ident).textContent = "Ingredient: " + ingred + " "
                    var iFoodList = document.createElement('li');
                    iFoodList.textContent = ingredFood;
                document.getElementById(imgulF.id).appendChild(iFoodList); 
                    };
                };
            
            }return foods;
            //console.log(foods); 
            
        
});

}
//inspired by https://www.geeksforgeeks.org/how-to-clear-the-content-of-a-div-using-javascript/
function clearDiv(elementID) {
    var ul = document.getElementById(elementID);
    while(ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
}



function init() {
    tooBuzzD();
    tooFull();
}
init();

