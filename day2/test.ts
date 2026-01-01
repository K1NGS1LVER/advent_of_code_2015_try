import * as fs from "fs";
import { constrainedMemory } from "process";

fs.readFile(
  "data.txt",
  "utf8",
  (err: NodeJS.ErrnoException | null, data: string) => {
    if (err) throw err;

    let lengthOrder: number = 0;
    let widthOrder: number = 1;
    let heightOrder: number = 2;
    let sum: number = 0;
    let rawArr: Array<string> = data.split("\n");

    for (let giftSpec of rawArr) {
      if (giftSpec == "" || giftSpec === null) continue;

      let min: number = Number.MAX_VALUE;
      let area: number = 0;
      let singleGiftPaper: number = 0;
      let allDimensionValues: Array<string> = giftSpec.split("x");
      let subTotalArea: number = 0;
      let length: number = Number(allDimensionValues[lengthOrder]);
      let width: number = Number(allDimensionValues[widthOrder]);
      let height: number = Number(allDimensionValues[heightOrder]);
      let side: number;

      side = length * width;
      subTotalArea = 2 * side;
      area += subTotalArea;
      if (min > side) min = side;

      side = width * height;
      subTotalArea = 2 * side;
      area += subTotalArea;
      if (min > side) min = side;

      side = height * length;
      subTotalArea = 2 * side;
      area += subTotalArea;
      if (min > side) min = side;

      singleGiftPaper = area + min;

      sum += singleGiftPaper;
    }
    console.log(sum);
  },
);
