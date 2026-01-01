"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
fs.readFile("data.txt", "utf8", function (err, data) {
    if (err)
        throw err;
    var lengthOrder = 0;
    var widthOrder = 1;
    var heightOrder = 2;
    var sum = 0;
    var rawArr = data.split("\n");
    for (var _i = 0, rawArr_1 = rawArr; _i < rawArr_1.length; _i++) {
        var giftSpec = rawArr_1[_i];
        if (giftSpec == "" || giftSpec === null)
            continue;
        var min = Number.MAX_VALUE;
        var area = 0;
        var singleGiftPaper = 0;
        var allDimensionValues = giftSpec.split("x");
        var subTotalArea = 0;
        var length_1 = Number(allDimensionValues[lengthOrder]);
        var width = Number(allDimensionValues[widthOrder]);
        var height = Number(allDimensionValues[heightOrder]);
        var side = void 0;
        side = length_1 * width;
        subTotalArea = 2 * side;
        area += subTotalArea;
        if (min > side)
            min = side;
        side = width * height;
        subTotalArea = 2 * side;
        area += subTotalArea;
        if (min > side)
            min = side;
        side = height * length_1;
        subTotalArea = 2 * side;
        area += subTotalArea;
        if (min > side)
            min = side;
        singleGiftPaper = area + min;
        sum += singleGiftPaper;
    }
    console.log(sum);
});
