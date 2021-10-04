function getCocktail() {
// fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?i=Gin", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
// 		"x-rapidapi-key": "dbc53f6089msh95fed8e2b3e0b48p1d6e3bjsn5fc9eef9bf48"
// 	}
// })
fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=black_velvet")
.then(function (response) {
	return response.json();
	})
// .catch(err => {
// 	console.error(err);
// });
.then(function (data) {
	console.log(data)
});
}

function init(){
    getCocktail()
};  
init();
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