function dwarfRollCall(dwarves) {
  var names = "";
  for (var i = 0; i < dwarves.length; i++) {
    names += `${(i+1)}. ${dwarves[i]} `;
  }
  return names;
}

function summonCaptainPlanet(planeteerCalls){
  var names = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
    names.push(`${planeteerCalls[i].toUpperCase()}!`)
  }
  return names;
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    }
    return false;
  }
}

function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i++) {
    if (foods[i] == "cheddar") {
      return "cheddar";
    }
      else if (foods[i] == "gouda") {
        return "gouda";
    }
      else if (foods[i] == "camembert") {
        return "camembert";
    }
  }    
      return "no cheese!";
}
