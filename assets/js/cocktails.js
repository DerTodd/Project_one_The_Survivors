var drinkSelectedInput = document.getElementById("drinkSelectedInput");
var findIt = document.getElementById('findIt');
var ingredient2 = document.getElementById("ingredient2");



function getCocktail() {
        drinkSelectionTrim = drinkSelectedInput.value.trim();
        drinkSelectedNoSpace= drinkSelectionTrim.split(' ').join('_');
        drinkSelected = drinkSelectedNoSpace.toLowerCase();
        //remove the spaces https://stackoverflow.com/questions/441018/replacing-spaces-with-underscores-in-javascript
        console.log("Drink " + drinkSelected);
        //retrieve any stored items from local storage and assign to data create new variable and add it to anything already there
        var data = JSON.parse(localStorage.getItem("data")) || [];
        var dataEntry = {
            drink: drinkSelected,
        };
        data.push(dataEntry);
        // save to local storge
        localStorage.setItem("data", JSON.stringify(data))
        localStorage.setItem("drinks", JSON.stringify(drinkSelected));
        console.log(drinkSelected);
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
        drinkChoice = {
            name : data.drinks[0].strDrink,
            instructions : data.drinks[0].strInstructions,
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
        ingredList =[
            data.drinks[0].strIngredient1,
            data.drinks[0].strIngredient2,
            data.drinks[0].strIngredient3,
            data.drinks[0].strIngredient4,
            data.drinks[0].strIngredient5,
            data.drinks[0].strIngredient6,
        ];
        measurements = [
            data.drinks[0].strMeasure1,
            data.drinks[0].strMeasure2,
            data.drinks[0].strMeasure3,
            data.drinks[0].strMeasure4,
            data.drinks[0].strMeasure5,
            data.drinks[0].strMeasure6
        ] 
        //

        
        console.log(drinkChoice);
        console.log(ingredList[0].data.value);
        console.log(drinkChoice.ingredient2);
        console.log(drinkChoice.ingredient3);
        console.log(drinkChoice.ingredient4);
        document.getElementById("drinkName").textContent = drinkChoice.name;
        document.getElementById("instructions").textContent = "Instructions: " + drinkChoice.instructions;
        document.getElementById("ingredient1").textContent = "First Ingredient: " + drinkChoice.measurement1 + " " + drinkChoice.ingredient1;
        document.getElementById("ingredient2").textContent = "Second Ingredient: " + drinkChoice.measurement2 + " " + drinkChoice.ingredient2;
        document.getElementById("ingredient3").textContent = "Third Ingredient: " + drinkChoice.measurement3 + " " + drinkChoice.ingredient3;
        document.getElementById("ingredient4").textContent = "Forth Ingredient: " + drinkChoice.measurement4 + " " + drinkChoice.ingredient4;
        document.getElementById("ingredient5").textContent = "Fifth Ingredient: " + drinkChoice.measurement5 + " " + drinkChoice.ingredient5;
        document.getElementById("ingredient6").textContent = "Sixth Ingredient: " + drinkChoice.measurement6 + " " + drinkChoice.ingredient6;
        for (let index = 0; index < 15; index++) {
            const element = array[index];
            
        }
    });
};

//function init() {
  //  getCocktail()
//}; 

//set the event listener to the button with the id "findIt"
findIt.addEventListener('click', function(event) {
    //alert("Hi, " + event.target.tagName);
    getCocktail();
});

//init();
//https://api.punkapi.com/v2/beers?food_tacos
// function getWeatherApi() {e
//     drinkName =drinkNameInput.value.trim()};
//     console.log("Drink " + drinkName);
//     //retrieve any stored items from local storage and assign to data create new variable and add it to anything already there
//     // var data = JSON.parse(localStorage.getItem("data")) || [];
//     // var dataEntry = {
//     //   city: cityName,
//     // };
//     // data.push(dataEntry);
//     // // save to local storge
//     // localStorage.setItem("data", JSON.stringify(data))
//     // localStorage.setItem("cities", JSON.stringify(cityName));
    
//     //Use the ` to set the search values that are from the form
//     var requestUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
//   //fetch finally ran and needed data grabbed from it. lat and long sent to api to get all the weather information
//     fetch(requestUrl)
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         console.log(data)
//           locationW = {
//         "lon" : data.coord.lon,
//         "lat" : data.coord.lat,
//           };
//        console.log(locationW);
//        //Set the name of the city the user requested
//        document.getElementsByClassName("title").textContent = town;
//        getWeatherAPIwithLoc();
//       });return locationW, cityName;
//    
//   