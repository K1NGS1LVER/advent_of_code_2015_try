"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
fs.readFile("data.txt", "utf8", (err, data) => {
    if (err)
        throw err;
    let floor = 0;
    let raw = data;
    let pos;
    let foundPos;
    let index = 0;
    for (const chr of raw) {
        index++;
        if (chr === "(") {
            floor++;
        }
        else if (chr === ")") {
            floor--;
        }
        else {
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
});
