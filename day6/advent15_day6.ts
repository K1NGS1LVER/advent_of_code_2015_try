import fs from "fs";

fs.readFile("dummy.txt", "utf-8", (err, data) => {
  if (err) throw err;

  let count = 0;
  let lines = data.trim().split("\n");
  let grid = [...Array(1000)].map(() => Array(1000).fill(false));

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
        for (let i = fromXInt; i < toXInt; i++) {
          for (let j = fromYInt; j < toYInt; j++) {
            grid[i][j] = ~grid[i][j];
          }
        }

        break;

      case "turn off":
        for (let i = fromXInt; i < toXInt; i++) {
          for (let j = fromYInt; j < toYInt; j++) {
            grid[i][j] = false;
          }
        }
        break;

      case "turn on":
        for (let i = fromXInt; i < toXInt; i++) {
          for (let j = fromYInt; j < toYInt; j++) {
            grid[i][j] = true;
          }
        }
        break;
      default:
        console.error("action not found !");
        break;
    }
    for (let y = 0; y < grid.length; y++) {
      for (let x = 0; x < grid[y].length; x++) {
        let cellValue = grid[y][x];

        if (cellValue) {
          count++;
        }
      }
    }
  }

  console.log(count);
});
