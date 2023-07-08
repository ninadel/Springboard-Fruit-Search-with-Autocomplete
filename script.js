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

const suggestions = document.querySelector(".suggestions ul");

const input = document.querySelector("#fruit");

const suggestionDiv = document.querySelector("div.suggestions");

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

  // this is an array of objects which includes suggestions in different text formats
  const suggestionObs = parseArr(fruit);

// set a maximum number of displayed suggestions, start with 8?
const suggestionDisplayCount = 8;

// This function is called by the dom load event listener
// suggestions will be stored in a UL
// DOM manipulation will be used to create a dynamic UL of items where items in the fruit list are filtered based on text provided by input
function startSearch() {
  // what is run when the search page is loaded?
  // keystrokes will trigger the function searchHandler
  input.addEventListener("keyup", searchHandler);
  // focus on search box
  input.focus();
}

// this function is called once by startSearch to take the arr of possible result strings and return an arr of result objects
function parseArr(arr) {
  // NOTE: parsing out emojis https://stackoverflow.com/questions/37089427/javascript-find-emoji-in-string-and-parse
  //   let emojiRE = /\p{Emoji}/u;

  // change arr of fruit strings to an arr of fruit objects, where keys are simple, display, and emoji
  const newArr = arr.reduce(function (currentArr, nextItem) {
    let newObj = {};
    // simple will be lowercase string with spaces removed
    // simple value will be used for comparing input to fruit name, will be lowercase only with emoji and spaces stripped out
    newObj["simple"] = nextItem
      .toLowerCase()
      //   .replace(emojiRE, "")
      .replace(" ", "");
    newObj["display"] = nextItem;
    currentArr.push(newObj);
    return currentArr;
  }, []);
  return newArr;
}

// this function returns HTML which will be displayed for the LI of the suggestion
// this function compares the inputVal to the diplay string at the rank position to determine the innerHTML fo the result
// this function is called by search
function getDisplayHTML(displayStr, rank, inputVal) {
  let startBold = null;
  let endBold = null;
  let displayHTML = null;
  let spaceIndex = displayStr.indexOf(" ");
  // check if the input val is in the display
  subStrIndex = displayStr.toLowerCase().indexOf(inputVal.toLowerCase());
  // check if the matching string between inputVal and suggestion is contiguous (doesn't have a space)
  if (subStrIndex !== -1) {
    // if there is not a space (easy match), return HTML
    endBold = subStrIndex + inputVal.length;
    startBold = subStrIndex;
  } else {
    // if there is a space (mismatch), return HTML
    subStrIndex = displayStr
      .toLowerCase()
      .replace(" ", "")
      .indexOf(inputVal.toLowerCase());
    endBold = subStrIndex + inputVal.length + 1;
    startBold = subStrIndex;
  }
  // if the match is at the beginning of the suggestion, return HTML
  if (startBold === 0) {
    return (
      '<span class="match-text">' +
      displayStr.slice(subStrIndex, endBold) +
      "</span>" +
      displayStr.slice(endBold, displayStr.length)
    );
  } else {
    // if the match is not at the beginning of the suggestion, return HTML
    return (
      displayStr.slice(0, startBold) +
      '<span class="match-text">' +
      displayStr.slice(startBold, endBold) +
      "</span>" +
      displayStr.slice(endBold, displayStr.length)
    );
  }
}

// this function handles the logic of searching through the fruit list and returning a list of suggestions
// this function filters a list of fruit based on user input
// this function filters list items where the input appears anywhere in the list
// this function is case insensitive
// this function is called by searchHandler
function search(str) {
  const results = [];
  // take an array of the suggestion objects
  const rankedSuggestions = suggestionObs
    // filter to only include those where the search string is present
    .filter(function (ob) {
      return ob["simple"].indexOf(str) !== -1;
    })
    // add a property rank score which indicates the position of the string in the suggestion
    .reduce(function (rankedSet, ob) {
      ob["rank"] = ob["simple"].indexOf(str);
      rankedSet.push(ob);
      return rankedSet;
    }, []);
  // extract a sorted list of possible ranks to use in loop
  const rankings = Array.from(
    new Set(
      rankedSuggestions
        .map(function (ob) {
          return ob["rank"];
        })
        .sort()
    )
  );
  // loop through ranks, starting with lowest rank score (highest match)
  for (let i = 0; i < rankings.length; i++) {
    const resultsToAdd = rankedSuggestions
      .filter(function (obj) {
        return obj["rank"] === rankings[i];
      })
      // take the display strings from the objects
      .map(function (obj) {
        displayStr = obj["display"];
        return getDisplayHTML(obj["display"], obj["rank"], str);
      });
    // add suggestion to results list
    for (let j = 0; j < resultsToAdd.length; j++) {
      results.push(resultsToAdd[j]);
      // if display limit is reached, return result list
      if (results.length === suggestionDisplayCount) {
        return results;
      }
    }
  }
  // optional: fuzzy matching?
  // if input has spaces, check as if there were no spaces
  // Questions to resolve
  // what if the input and list items differ in spacing?
  // how to prioritize most likely suggestions? e.g. if searching for "a" prioritize suggestions that have "a" in the first position
  return results;
}

// this function is called by the keystroke event listener
function searchHandler(e) {
  let searchStr = input.value.toLowerCase();
  // set suggestions to be invisible
  suggestions.classList.remove("has-suggestions");
  // set suggestions to be empty
  suggestions.innerHTML = "";
  // call the search function with string from input to get array of fruit results
  if (searchStr.length > 0) {
    results = search(searchStr);
    if (results.length > 0) {
      showSuggestions(results, searchStr);
    }
  }
}

// this function handles the UI of displaying suggestions below the search box
// this function is called by the searchHandler function
function showSuggestions(results, inputVal) {
  // append results to the suggestions list
  for (item of results) {
    const resultItem = document.createElement("li");
    resultItem.innerHTML = item;
    // clicking on a suggestion will trigger the function useSuggestion
    resultItem.addEventListener("click", useSuggestion);
    suggestions.append(resultItem);
  }
  // if there's a match, show suggestions
  suggestions.classList.add("has-suggestions");
}

  // this function takes the target of the click and populates the search box with the list item from the target
  // this function is called by the click event listener
  function useSuggestion(e) {
    if (e.target.tagName === "LI") {
      input.value = e.target.innerText;
      suggestions.classList.remove("has-suggestions");
    }
  }
}

// // listener which runs when DOM is loaded
document.addEventListener("DOMContentLoaded", startSearch);
