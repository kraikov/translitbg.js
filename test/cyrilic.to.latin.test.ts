import { cyrilicToLatin } from "../src/index";
import { assert } from "chai";

describe("All tests", function () {
  it("test азбука", function () {
    const result = cyrilicToLatin("абвгдежзийклмнопрстуфхцчшщъьюяѝ");
    assert.equal(result, "abvgdezhziyklmnoprstufhtschshshtayyuyai");
  });

  it("test изречения, нови редове", function () {
    let input =
      "Всички хора се раждат свободни и равни по достойнство и права." +
      "Те са надарени с разум и съвест и следва да се отнасят помежду си в дух на братство.";
    let expected =
      "Vsichki hora se razhdat svobodni i ravni po dostoynstvo i prava." +
      "Te sa nadareni s razum i savest i sledva da se otnasyat pomezhdu si v duh na bratstvo.";
    assert.equal(cyrilicToLatin(input), expected);

    input = "Всички хора \nсе раждат свободни\n и равни по достойнство\n и права.";
    expected = "Vsichki hora \nse razhdat svobodni\n i ravni po dostoynstvo\n i prava.";
    assert.equal(cyrilicToLatin(input), expected);

    input = "Ѝ може да бъде намерен и в други езици \nкато руския език и украинския език.";
    expected = "I mozhe da bade nameren i v drugi ezitsi \nkato ruskia ezik i ukrainskia ezik.";
    assert.equal(cyrilicToLatin(input), expected);
  });

  it("test човешки имена", function () {
    assert.equal(cyrilicToLatin("Самуил"), "Samuil");
    assert.equal(cyrilicToLatin("Синтия"), "Sintia");
    assert.equal(cyrilicToLatin("Марияна ИваноВа"), "Mariyana IvanoVa");
    assert.equal(cyrilicToLatin("Явор"), "Yavor");
  });

  it("test други имена", function () {
    assert.equal(cyrilicToLatin("Стара планина"), "Stara planina");
    assert.equal(cyrilicToLatin("Атанасовско езеро"), "Atanasovsko ezero");
    assert.equal(cyrilicToLatin("Централен Балкан"), "Tsentralen Balkan");
    assert.equal(cyrilicToLatin("София-юг"), "Sofia-yug");
    assert.equal(cyrilicToLatin("СофИя-юг"), "SofIa-yug");
    assert.equal(cyrilicToLatin("СофиЯ-юг"), "SofiA-yug");
    assert.equal(cyrilicToLatin("СофИЯ-ЮГ"), "SofIA-YuG");
    assert.equal(cyrilicToLatin("Перник-север"), "Pernik-sever");
    assert.equal(cyrilicToLatin("Златни пясъци"), "Zlatni pyasatsi");
    assert.equal(cyrilicToLatin("Горна Оряховица"), "Gorna Oryahovitsa");
  });
});
