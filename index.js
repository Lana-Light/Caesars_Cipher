/*first,optimal version with map(), regExp and ES6 arrow function*/
function rot13(str) { // LBH QVQ VG!
  return str.split("").map((val) => {
    var char = val.charCodeAt(val);
    return val.match(/[A-Z]/g) ? char <= 77 ? String.fromCharCode(char + 13) : String.fromCharCode(char - 13) : val;
  }).join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

/*second,compact version with ES6*/
const rot13 = (str) => str.split("").map((val) => val.match(/[A-Z]/g) ? val.charCodeAt(val) <= 77 ? String.fromCharCode(val.charCodeAt(val) + 13) : String.fromCharCode(val.charCodeAt(val) - 13) : val).join("");

// Change the inputs below to test
rot13("PBZCNPG IREFVBA");

/*version 3, with for loop, slice(), replace()*/
function rot13(str) { // LBH QVQ VG!
  for (var i = 0; i < str.length; i++) {
    var char = str.charCodeAt(i);
    if (char > 77 && char <= 90) { str = str.slice(0, i) + str[i].replace(str[i], String.fromCharCode(char - 13)) + str.slice(i + 1); }
    else if (char >= 65 && char <= 77) { str = str.slice(0, i) + str[i].replace(str[i], String.fromCharCode(char + 13)) + str.slice(i + 1); }
  } return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

/* version 4, with for loop, push(), join() */
function rot13(str) { // LBH QVQ VG!
  var arr = [];
  for (var i = 0; i < str.length; i++) {
    var char = str.charCodeAt(i);
    char < 65 || char > 90 ? arr.push(str[i]) : char > 77 ? arr.push(String.fromCharCode(char - 13)) : arr.push(String.fromCharCode(char + 13));
  } return arr.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

/* version 5, with split(), for loop, replace() */
function rot13(str) { // LBH QVQ VG!
  str = str.split("");
  for (var i = 0; i < str.length; i++) {
    var char = str[i].charCodeAt(0);
    if (char < 65 || char > 90) { char > 77 ? str[i] = str[i].replace(str[i], String.fromCharCode(char - 13)) : str[i] = str[i].replace(str[i], String.fromCharCode(char + 13)); }
  } return str.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
