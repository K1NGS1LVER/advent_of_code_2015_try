import * as fs from "fs";

fs.readFile("data.txt", "utf8", (err: NodeJS.ErrnoException | null, data: string) => {
  let ddata: string = data;
  for (let letter in ddata) {
    console.log(`${letter} \n`);
  }
});
