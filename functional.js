let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//  Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// MAP
// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(element.toLowerCase().split(/\s+/).join("-"));
  });
  return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

// THIS WAS AN EXERCISE
// Returns an array of URLs in the form of
// 'https://example.com/<urilified form>'
function createURL(states) {
  return functionalUrls(states).map(url => "https://example.com/" + url);
}
console.log(createURL(states));

// FILTER
// singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

// singles: Functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

// THESE WERE AN EXERCISE
// Returns states including 'Dakota' in their names.
function includesDakotas(states) {
  return states.filter(state => state.includes("Dakota") === true);
}
console.log(includesDakotas(states));

// Returns states that match the regex '/Dakota/'
function regexDakotas(states) {
  return states.filter(state => !!state.match(/Dakota/) === true);
}
console.log(regexDakotas(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// REDUCE
// sum: Imperative solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(n => total += n);
  return total;
}
console.log(imperativeSum(numbers));

// sum: Functional solution
function functionalSum(elements) {
  return numbers.reduce((total, n) => { return total += n; }, 0);
}
console.log(functionalSum(numbers));

// lengths: Imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(element => { lengths[element] = element.length; });
  return lengths;
}
console.log(imperativeLengths(states));

// lengths: Functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, state) => {
                          lengths[state] = state.length;
                          return lengths;
                        }, {});
}
console.log(functionalLengths(states));

// MORE EXERCISES
// factorials!; at least sometimes
function product(numbers) {
  return numbers.reduce((total, n) => { return total *= n }, 1);
}
console.log(product(numbers));

//
