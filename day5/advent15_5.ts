import fs from "fs";

fs.readFile("data.txt", "utf8", (err: NodeJS.ErrnoException | null, data: string) => {
  let raw: Array<string> = data.trim().split("\n");
  const vowels: Array<string> = ["a", "e", "i", "o", "u"];
  let has3VowelsList: Array<string> = [];
  let hasVowelAndDoubleLetter: Array<string> = [];
  let someStrings: Array<string> = ["ab", "cd", "pq", "xy"];
  let hasVowelDoubleLetterAndSomeStrings: Array<string> = [];
  // condition 1
  raw.forEach((word) => {
    let vowelCount = 0;
    const letterSeperatedWord: Array<string> = word.split("");
    letterSeperatedWord.forEach((letter) => {
      vowels.forEach((vowel) => {
        if (vowel === letter) ++vowelCount;
      });
    });
    if (vowelCount >= 3) has3VowelsList.push(word);
  });

  // condition 2
  has3VowelsList.forEach((word) => {
    let hasRepeatLetter: boolean = false;

    for (let index = 0; index < word.length; index++) {
      const element = word[index];
      const nextElement = word[index + 1];

      if (nextElement === element) {
        hasRepeatLetter = true;
      }
    }

    if (hasRepeatLetter) hasVowelAndDoubleLetter.push(word);
  });

  // condition 3
  hasVowelAndDoubleLetter.forEach((word) => {
    let hasThoseWords: boolean = false;

    someStrings.forEach((weirdString) => {
      if (word.includes(weirdString)) hasThoseWords = true;
    });
    if (!hasThoseWords) hasVowelDoubleLetterAndSomeStrings.push(word);
  });

  console.log(hasVowelDoubleLetterAndSomeStrings.length);
});
