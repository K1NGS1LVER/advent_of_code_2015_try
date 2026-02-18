import fs from "fs";

fs.readFile("data.txt", "utf-8", (err: NodeJS.ErrnoException, data: string) => {
  if (err) throw err;
  if (!data || data.trim().length === 0) console.error("no data in file");

  let count: number = 0;

  let lines = data
    .trim()
    .split("\n")
    .map((line) => line.trim());
  let grid: number[][] = [...Array(1000)].map(() => Array(1000).fill(0));

  for (let line of lines) {
    let [action, fromX, fromY, toX, toY] = line
      .match("(toggle|turn off|turn on) (\\d+),(\\d+) through (\\d+),(\\d+)")!
      .slice(1);

    let fromXInt = parseInt(fromX);
    let fromYInt = parseInt(fromY);
    let toXInt = parseInt(toX);
    let toYInt = parseInt(toY);

    switch (action) {
      case "toggle":
        for (let i = fromXInt; i <= toXInt; i++) {
          for (let j = fromYInt; j <= toYInt; j++) {
            grid[i][j] += 2;
          }
        }

        break;

      case "turn off":
        for (let i = fromXInt; i <= toXInt; i++) {
          for (let j = fromYInt; j <= toYInt; j++) {
            if (grid[i][j] === 0) continue;
            grid[i][j] -= 1;
          }
        }
        break;

      case "turn on":
        for (let i = fromXInt; i <= toXInt; i++) {
          for (let j = fromYInt; j <= toYInt; j++) {
            grid[i][j] += 1;
          }
        }
        break;
      default:
        console.error("action not found !");
        break;
    }
  }
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      count += grid[x][y];
    }
  }
  console.log(count);
});
