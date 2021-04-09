"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transliterate = exports.latinToCyrilic = exports.cyrilicToLatin = void 0;
const latin_1 = __importDefault(require("./latin"));
const cyrilic_1 = __importDefault(require("./cyrilic"));
function cyrilicToLatin(text) {
    return transliterate(text, cyrilic_1.default.STREAMLINED);
}
exports.cyrilicToLatin = cyrilicToLatin;
function latinToCyrilic(text) {
    return transliterate(text, latin_1.default.STREAMLINED);
}
exports.latinToCyrilic = latinToCyrilic;
function transliterate(text, mode) {
    const result = [];
    const chars = text.split("");
    for (let i = 0; i < chars.length; i++) {
        const cur = chars[i];
        const next = chars[i + 1];
        if (next) {
            const curToken = cur + next;
            if (mode.tokens.ia[curToken]) {
                const nextNext = chars[i + 2];
                if (!nextNext || /^[-\s]$/.test(nextNext)) {
                    result.push(mode.tokens.ia[curToken]);
                    i++;
                    continue;
                }
            }
        }
        if (mode.map[cur]) {
            result.push(mode.map[cur]);
        }
        else {
            result.push(cur);
        }
    }
    return result.join("");
}
exports.transliterate = transliterate;
//# sourceMappingURL=translitbg.js.map