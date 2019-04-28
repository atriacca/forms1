document.words.addEventListener("submit", function(e){
    e.preventDefault()
  
    var noun = document.words.noun.value
    var adverb = document.words.adverb.value
    var verb = document.words.verb.value
  
    console.log("The " + noun + " did" + adverb + " " + verb + " in its home")
  })
  console.log(document.animals.favorite.value)

  document.animals.addEventListener("submit", function(e){
    e.preventDefault()
    //assign our animals that are liked to a variable
    var animals = document.animals.likes
    //create a new array that we can fill with the values (as strings) of our checkboxes
    var checkedAnimals = []
    //loop through each checkbox
    for (var i = 0; i < animals.likes.length; i++){
      //check to see if the checkbox is checked
      if(animals[i].checked){
        //add the values to our new array
        checkedAnimals.push(animals[i].value)
      }
    }
    console.log(checkedAnimals)
  })
  // The following is another way to get the list of checked items...
  document.animals.addEventListener("submit", function(e){
    e.preventDefault()
    var checkedAnimals = [];
    var checkedBoxes = document.querySelectorAll("input[name=likes]:checked");
    for (var i = 0; i < checkedBoxes.length; i++) {
        checkedAnimals.push(checkedBoxes[i].value);
    }
    console.log(checkedAnimals)
});

/*

document.getElementById("first-name").value
var input = document.getElementById("input");

input.addEventListener("change", function(e){
    console.log(e.target.value)
    console.log(input.value) // same thing??
    console.log(document.getElementById("input").value) // same thing
})
*/