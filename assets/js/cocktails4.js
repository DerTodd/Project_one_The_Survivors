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
        //console.log("drink check " + data.drinks[0].strDrink)
        if(data.drinks == "undefined" || data.drinks == null || data.drinks == "" || data.drinks == "drinks: null") {
            document.getElementById("drinkName").textContent = "";
            document.getElementById("instructions").textContent = "";
            var rejected = document.createElement('p');
            rejected.textContent = "We've all been rejected.  Take a bite of lime, shake it off, and try again!";
            rejected.style.color = "Red";
            document.getElementById('ingredUL').appendChild(rejected); 
        }else {
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
        //This is new
        // var identList = [
        //     ingredient1,
        //     ingredient2,
        //     ingredient3,
        //     ingredient4,
        //     ingredient5,
        //     ingredient6,
        //     ingredient7,
        //     ingredient8,
        //     ingredient9,
        //     ingredient10,
        //     ingredient11,
        //     ingredient12,
        //     ingredient13,
        //     ingredient14,
        //     ingredient15

        // ]

        // var measList = [
        //     measurements1,
        //     measurements2,
        //     measurements3,
        //     measurements4,
        //     measurements5,
        //     measurements6,
        //     measurements7,
        //     measurements8,
        //     measurements9,
        //     measurements10,
        //     measurements11,
        //     measurements12,
        //     measurements13,
        //     measurements14,
        //     measurements15
        // ]
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

        console.log(ingredList);
        console.log(measurements);
        console.log(drinkChoice);
        console.log(drinkChoice.ingredient2);
        console.log(drinkChoice.ingredient3);
        console.log(drinkChoice.ingredient4);
        console.log(drinkChoice.image);
        document.getElementById("drinkName").textContent = drinkChoice.name;
        document.getElementById("instructions").textContent = "Instructions: " + drinkChoice.instructions;
        var img = document.createElement('img');
            img.src = drinkChoice.image;
            img.alt = "Picture of cocktail";
            img.width = 250;
            img.height = 250;
            document.getElementById('image1').appendChild(img);   
        //document.getElementById("ingredient1").textContent = "First Ingredient: " + drinkChoice.measurement1 + " " + drinkChoice.ingredient1;
        // document.getElementById("ingredient2").textContent = "Second Ingredient: " + drinkChoice.measurement2 + " " + drinkChoice.ingredient2;
        // document.getElementById("ingredient3").textContent = "Third Ingredient: " + drinkChoice.measurement3 + " " + drinkChoice.ingredient3;
        // document.getElementById("ingredient4").textContent = "Forth Ingredient: " + drinkChoice.measurement4 + " " + drinkChoice.ingredient4;
        // document.getElementById("ingredient5").textContent = "Fifth Ingredient: " + drinkChoice.measurement5 + " " + drinkChoice.ingredient5;
        // document.getElementById("ingredient6").textContent = "Sixth Ingredient: " + drinkChoice.measurement6 + " " + drinkChoice.ingredient6;
        for (let index = 0; index < 15; index++) {
            const ingred = combinedList[index];
            //const ident = identList[index];
            if(ingred !== null && ingred !== "null: null"){
            //var iList =
            //document.getElementById("ingredUL").appendChild(ident).textContent = "Ingredient: " + ingred + " "
            var iList = document.createElement('li');
            console.log(ingred.replace(/null/g, ""))
            iList.textContent = ingred.replace(/null/g, "");
            //str = str.replace(/&#39;/g, "'");
          document.getElementById('ingredUL').appendChild(iList); 
            };
        };
    }
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

//function init() {
  //  getCocktail()
//}; 

//set the event listener to the button with the id "findIt"
findIt.addEventListener('click', function(event) {
    //alert("Hi, " + event.target.tagName);
    clearDiv("ingredUL");
    clearDiv("measUL");
    clearDiv("image1");
    //clearP("drinks");
    getCocktail();
});
//inspired by https://www.geeksforgeeks.org/how-to-clear-the-content-of-a-div-using-javascript/
function clearDiv(elementID) {
    var ul = document.getElementById(elementID);
      
    while(ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
}
// function clearP(elementID) {
//     var p = document.getElementById(elementID);
      
//     while(p.firstChild) {
//         p.removeChild(p.firstChild);
//     }
// }
//init();