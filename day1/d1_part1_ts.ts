import * as fs from "fs";

fs.readFile(
  "data.txt",
  "utf8",
  (err: NodeJS.ErrnoException | null, data: string) => {
    if (err) throw err;

    let floor: number = 0;
    let raw: string = data;
    let pos: number;
    let foundPos: boolean;
    let index: number = 0;
    for (const chr of raw) {
      index++;
      if (chr === "(") {
        floor++;
      } else if (chr === ")") {
        floor--;
      } else {
        continue;
      }

      if (floor < 0) {
        while (!foundPos) {
          pos = Number(index);
          foundPos = true;
        }
      }
    }
    console.log(`the floor santa is in ${floor} \n`);
    console.log(`goes to basement on the ${pos} instruction \n`);
  },
);
