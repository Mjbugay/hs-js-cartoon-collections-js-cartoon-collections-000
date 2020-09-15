function dwarfRollCall(dwarves) {
  var names = "";
  for (var i = 0; i < dwarves.length / 2; i++) {
    names += `${(i+1)}. ${dwarves[i]} `;
  }
  return names;
}

function summonCaptainPlanet(planeteerCalls){
  var calls = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
    calls.push(`${planeteerCalls[i].toUpperCase()}!`);
  }
  return calls;
}

function longPlaneteerCalls(calls) {
  for (var i = 0; i < calls.length; i++) {
    if (calls[i].length > 4) {
      return true;
      }
    }
  return false;
}

function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i++) {
    if (foods[i] == "cheddar") {
      return foods[i];
    }
      else if (foods[i] == "gouda") {
        return foods[i];
    }
      else if (foods[i] == "camembert") {
        return foods[i];
    }
    else if (foods[i] == "swiss") {
      return foods[i];
    }
  }    
      return "no cheese!";
}

function wordsWithB (words) {
  var results = [];
  for (var i = 0; i < words.length; i++) {
    if (word[i][0] == "b") {
      results.push(word[i]);
    }
  }
  return results;
}
