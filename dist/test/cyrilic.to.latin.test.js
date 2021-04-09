"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
const chai_1 = require("chai");
describe("All tests", function () {
    it("test азбука", function () {
        const result = index_1.cyrilicToLatin("абвгдежзийклмнопрстуфхцчшщъьюяѝ");
        chai_1.assert.equal(result, "abvgdezhziyklmnoprstufhtschshshtayyuyai");
    });
    it("test изречения, нови редове", function () {
        let input = "Всички хора се раждат свободни и равни по достойнство и права." +
            "Те са надарени с разум и съвест и следва да се отнасят помежду си в дух на братство.";
        let expected = "Vsichki hora se razhdat svobodni i ravni po dostoynstvo i prava." +
            "Te sa nadareni s razum i savest i sledva da se otnasyat pomezhdu si v duh na bratstvo.";
        chai_1.assert.equal(index_1.cyrilicToLatin(input), expected);
        input = "Всички хора \nсе раждат свободни\n и равни по достойнство\n и права.";
        expected = "Vsichki hora \nse razhdat svobodni\n i ravni po dostoynstvo\n i prava.";
        chai_1.assert.equal(index_1.cyrilicToLatin(input), expected);
        input = "Ѝ може да бъде намерен и в други езици \nкато руския език и украинския език.";
        expected = "I mozhe da bade nameren i v drugi ezitsi \nkato ruskia ezik i ukrainskia ezik.";
        chai_1.assert.equal(index_1.cyrilicToLatin(input), expected);
    });
    it("test човешки имена", function () {
        chai_1.assert.equal(index_1.cyrilicToLatin("Самуил"), "Samuil");
        chai_1.assert.equal(index_1.cyrilicToLatin("Синтия"), "Sintia");
        chai_1.assert.equal(index_1.cyrilicToLatin("Марияна ИваноВа"), "Mariyana IvanoVa");
        chai_1.assert.equal(index_1.cyrilicToLatin("Явор"), "Yavor");
    });
    it("test други имена", function () {
        chai_1.assert.equal(index_1.cyrilicToLatin("Стара планина"), "Stara planina");
        chai_1.assert.equal(index_1.cyrilicToLatin("Атанасовско езеро"), "Atanasovsko ezero");
        chai_1.assert.equal(index_1.cyrilicToLatin("Централен Балкан"), "Tsentralen Balkan");
        chai_1.assert.equal(index_1.cyrilicToLatin("София-юг"), "Sofia-yug");
        chai_1.assert.equal(index_1.cyrilicToLatin("СофИя-юг"), "SofIa-yug");
        chai_1.assert.equal(index_1.cyrilicToLatin("СофиЯ-юг"), "SofiA-yug");
        chai_1.assert.equal(index_1.cyrilicToLatin("СофИЯ-ЮГ"), "SofIA-YuG");
        chai_1.assert.equal(index_1.cyrilicToLatin("Перник-север"), "Pernik-sever");
        chai_1.assert.equal(index_1.cyrilicToLatin("Златни пясъци"), "Zlatni pyasatsi");
        chai_1.assert.equal(index_1.cyrilicToLatin("Горна Оряховица"), "Gorna Oryahovitsa");
    });
});
//# sourceMappingURL=cyrilic.to.latin.test.js.map