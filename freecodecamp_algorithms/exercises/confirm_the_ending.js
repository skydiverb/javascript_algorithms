// ========== Confirm the Ending ==========
// Check if a string (first argument, str) ends with the given target string (second argument,
// target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
// But for the purpose of this challenge,
// we would like you to use one of the JavaScript substring methods instead.


function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  // check if the last letter in a str matches the target letter or word
  // turn str into an array
  str = str.split(' ');
  // // if str last letter or word === target return true

  // if else statement way
  // if(str[str.length -1].includes(target)) {
  //   return true;
  // }
  // // else return false
  // return false;

  // ternary operator way
  // return str[str.length - 1].includes(target) ? true : false;

  // .includes() method returns a boolean
  return str[str.length - 1].includes(target);
}

confirmEnding("Bastian", "n") //should return true.
confirmEnding("Connor", "n") // should return false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") // should return false.
confirmEnding("He has to give me a new name", "name") // should return true.
confirmEnding("Open sesame", "same") // should return true.
confirmEnding("Open sesame", "pen") // should return false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") // should return false.
// Do not use the built-in method .endsWith() to solve the challenge.
