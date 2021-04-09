import latin from "./latin";
import cyrilic from "./cyrilic";

export function cyrilicToLatin(text) {
  return transliterate(text, cyrilic.STREAMLINED);
}

export function latinToCyrilic(text) {
  return transliterate(text, latin.STREAMLINED);
}

export function transliterate(text, mode) {
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
    } else {
      result.push(cur);
    }
  }

  return result.join("");
}
