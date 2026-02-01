let hasVowelAndDoubleLetter: Array<string> = ["aaab", "abcd", "cd", ""];
let someStrings: Array<string> = ["ab", "cd", "pq", "xy"];
let hasVowelDoubleLetterAndSomeStrings: Array<string> = [];

// condition 3
hasVowelAndDoubleLetter.forEach((word) => {
  let hasThoseWords: boolean = false;

  someStrings.forEach((weirdString) => {
    if (word.includes(weirdString)) hasThoseWords = true;
  });
  if (!hasThoseWords) hasVowelDoubleLetterAndSomeStrings.push(word);
});
console.log(hasVowelDoubleLetterAndSomeStrings.length);
