import { dir } from "console";
import fs, { Dirent } from "fs";
type cords = [number, number];

const convertNumberToString = (ele: cords) => {
  let [a, b] = ele;
  return `${a},${b}`;
};

fs.readFile("data.txt", "utf8", (err: NodeJS.ErrnoException | null, data: string) => {
  if (err) throw err;

  let raw: string = data.trim();
  const mapped = new Set<string>();
  const mapped2 = new Set<string>();
  let santasTurn: boolean = true;

  let currentElement: cords = [0, 0];
  santasTurn = !santasTurn;
  let currentElement2: cords = [0, 0];
  santasTurn = !santasTurn;

  mapped.add(convertNumberToString(currentElement));
  mapped2.add(convertNumberToString(currentElement2));
  for (const direction of raw) {
    switch (direction) {
      case "<":
        if (santasTurn) {
          currentElement = [currentElement[0] - 1, currentElement[1]];
          santasTurn = !santasTurn;
        } else {
          currentElement2 = [currentElement2[0] - 1, currentElement2[1]];
          santasTurn = !santasTurn;
        }
        break;
      case ">":
        if (santasTurn) {
          currentElement = [currentElement[0] + 1, currentElement[1]];
          santasTurn = !santasTurn;
        } else {
          currentElement2 = [currentElement2[0] + 1, currentElement2[1]];
          santasTurn = !santasTurn;
        }

        break;
      case "v":
        if (santasTurn) {
          currentElement = [currentElement[0], currentElement[1] - 1];
          santasTurn = !santasTurn;
        } else {
          currentElement2 = [currentElement2[0], currentElement2[1] - 1];
          santasTurn = !santasTurn;
        }

        break;
      case "^":
        if (santasTurn) {
          currentElement = [currentElement[0], currentElement[1] + 1];
          santasTurn = !santasTurn;
        } else {
          currentElement2 = [currentElement2[0], currentElement2[1] + 1];
          santasTurn = !santasTurn;
        }

        break;
      default:
        console.log("invalid character:");
        break;
    }
    mapped.add(convertNumberToString(currentElement));
    mapped2.add(convertNumberToString(currentElement2));
  }

  let combinedSantaRoutes = mapped;
  mapped2.forEach((direction) => {
    combinedSantaRoutes.add(direction);
  });
  console.log(combinedSantaRoutes);
  console.log(combinedSantaRoutes.size);
});
