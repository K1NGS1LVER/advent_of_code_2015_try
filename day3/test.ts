import fs from "fs";

fs.readFile("data.txt", "utf8", (err: NodeJS.ErrnoException | null, data: string) => {
  if (err) throw err;

  type cords = [number, number];

  const convertNumberToStr = (ele: cords) => {
    let [a, b] = ele;
    return `${a},${b}`;
  };

  const convertStrToNumber = (ele: string): [number, number] => {
    return ele.split(",").map(Number) as [number, number];
  };

  let raw: string = data.trim();
  const mapped = new Set<string>();

  let currentElement: cords = [0, 0];

  mapped.add(convertNumberToStr(currentElement));
  for (const direction of raw) {
    switch (direction) {
      case "<":
        currentElement = [currentElement[0] - 1, currentElement[1]];
        break;
      case ">":
        currentElement = [currentElement[0] + 1, currentElement[1]];
        break;
      case "v":
        currentElement = [currentElement[0], currentElement[1] - 1];
        break;
      case "^":
        currentElement = [currentElement[0], currentElement[1] + 1];
        break;

      default:
        console.log("invalid characters");
        break;
    }
    mapped.add(convertNumberToStr(currentElement));
  }
  console.log(mapped.size);
});
