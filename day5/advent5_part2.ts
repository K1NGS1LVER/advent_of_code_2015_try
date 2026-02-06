// part two of santas madness
// never occured to me that this can be done with regex , i kept doing some stupid  loops and stuff to check for the conditions , but regex is the way to go here

import fs from "fs";

fs.readFile("data.txt", "utf8", (err: NodeJS.ErrnoException | null, data: string) => {
  let doubleLettersRepeated = false;
  let patternedWords = false;
  let raw = data
    .trim()
    .split("\n")
    .filter((ele) => {
      const pairTwice = "(..).*\\1";
      const repeatWithGap = "(.).\\1";
      let doubleLettersRepeated = RegExp(pairTwice).test(ele);
      let patternedWords = RegExp(repeatWithGap).test(ele);
      return doubleLettersRepeated && patternedWords;
    });
  console.log(raw.length);
});
