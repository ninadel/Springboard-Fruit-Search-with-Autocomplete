// # Springboard-Fruit-Search-with-Autocomplete
// A search UI project from the Springboard Software Engineering bootcamp.
// ## Requirements
// When this project is done it will have the following functionality:
// * On-screen search bar with placeholder text
// * An event-listener for keystrokes which will trigger the function search()
// * * The function will filter a list of fruit based on user input
//   * If the string in the user input appears ANYWHERE in the fruit name, it should be added to results list
//   * It also should not matter if a user types upper or lower case letters
// * The autocomplete results will be displayed as a dropdown
// * On mouse hover, an event listener will highlight the suggested item under the user's cursor
// * On click, an event listener will trigger a function called useSuggestion(), which will populate the search box with the user's selected suggestiion
// * A stylesheet will define the search UI with a linear gradient background and a translucent background for the search bar which shows the background below

const input = document.querySelector("#fruit");

// suggestions will be stored in a UL
// DOM manipulation will be used to create a dynamic UL of items where items in the fruit list are filtered based on text provided by input
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

// This function is called by the dom load event listener
function startSearch() {
  // what is run when the search page is loaded?
  // focus on search box
  // set a maximum number of displayed suggestions, start with 10?
}

// this function is called once by startSearch to take the arr of possible result strings and return an arr of result objects
function parseArr(arr) {
  // NOTE: parsing out emojis https://stackoverflow.com/questions/37089427/javascript-find-emoji-in-string-and-parse
  let emojiRE = /\p{Emoji}/u;

  // change arr of fruit strings to an arr of fruit objects, where keys are simple, display, and emoji
  const newArr = arr.reduce(function (currentArr, nextItem) {
    let newObj = {};
    // simple will be lowercase string with spaces removed
    // simple value will be used for comparing input to fruit name, will be lowercase only with emoji and spaces stripped out
    newObj["simple"] = nextItem
      .toLowerCase()
      .replace(emojiRE, "")
      .replace(" ", "");
    newObj["display"] = nextItem;
    currentArr.push(newObj);
    return currentArr;
  }, []);
  return newArr;
}

// this function takes an array of objects with string values as the first argument, a string as a second argument, and an optional number
// this function returns an array of strings
// this function is called by the search function
function getMatches(arr, str, n = 10) {
  // filter arr of fruit objects to objects that match input
  // where indexOf input in str is not -1
  // optional: create an arr of ordered fruit objects which promotes most relevant suggestions
  // match scores: use indexOf for each suggestion - lowest indexOf gets promoted first
  // reduce list of matching fruit objects into a new object which stores arrays of objects by match score
  // take object which stores match scores, convert match scores into an array and order them so lowest match score is first
  // iterate through match score array, starting with lowest match score, and build result list until maximum number is reached
}

// this function handles the logic of searching through the fruit list and returning a list of suggestions
// this function filters a list of fruit based on user input
// this function filters list items where the input appears anywhere in the list
// this function is case insensitive
// this function is called by searchHandler
function search(str) {
  let results = [];
  // TODO
  // converts input str to lowercase with no spaces or emojis
  // checks string against const fruit which is a list of fruit objects
  // optional: fuzzy matching?
  // if input has spaces, check as if there were no spaces
  // Questions to resolve
  // what if the input and list items differ in spacing?
  // how to prioritize most likely suggestions? e.g. if searching for "a" prioritize suggestions that have "a" in the first position
  return results;
}

// this function is called by the keystroke event listener
function searchHandler(e) {
  // TODO
  // call the search function with string from input to get array of fruit results
  // if text input is empty, do not show suggestions
  // if text put is populated with user typed input
  // if there are not matches, do not show suggestions
  // if there is a match from the list, call the showSuggestions function to display suggestions UI
  // if a suggestion is clicked, do not show suggestions
}

// this function handles the UI of displaying suggestions below the search box
// this function is called by the searchHandler function
function showSuggestions(results, inputVal) {
  // TODO
  //
  // CSS selectors already provided for this project
  // .search-container {
  // 	/* TODO */
  //    }
  //    .search-container input,
  //    .search-container .suggestions {
  //    }
  //    .search-container input {
  //    }
  //    .search-container .suggestions {
  //    }
  //    ul {
  //    }
  //    ul.has-suggestions {
  //    }
  //    ul li {
  //    }
  //    ul li:hover {
  //    }
}

// this function takes the target of the click and populates the search box with the list item from the target
// this function is called by the click event listener
function useSuggestion(e) {
  // TODO
}

// // listener which runs when DOM is loaded
// document.addEventListener("DOMContentLoaded", startSearch);
// keystrokes will trigger the function searchHandler
// input.addEventListener("keyup", searchHandler);
// clicking on a suggestion will trigger the function useSuggestion
// suggestions.addEventListener("click", useSuggestion);
