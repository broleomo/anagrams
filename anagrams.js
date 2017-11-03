// eventually will change this to an input value for a search of a word e.target.value

// p1.
let givenWord = "least";
function alphabetize(word){
  return word.split('').sort().join('');
}
let matches = words.filter(function(word){
  return alphabetize(word) == alphabetize(givenWord);
});

// p2.

let alphabetizedList = alphabetize(words);

// create a loop using the length of the entire words list and give each word a value of [the variations of anagrams]
let dictionary = {}
for (var i = 0; i < words.length; i++) {
  let word = words[i]
  let matches = words.filter(function(word[i]){
    return alphabetize(word[i]) == alphabetize(word[i]);
  }
  dictionary.push {word[i]: [matches]}
}


// words.forEach(function(item,index){
//   if(index % 2 === 0)
// })
