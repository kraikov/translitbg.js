translitbg
=================

Transliterates Bulgarian to Latin and Latin to Bulgarian characters. Froked from https://github.com/petarov/translitbg.js

Транслитерация на българските букви с латински и на латински с български.

# Install

    npm install @kraykov/translitbg

or

    yarn add @kraykov/translitbg

# Usage

```javascript
import { cyrilicToLatin, latinToCyrilic } from '@kraykov/translitbg'

cyrilicToLatin('абвгдежзийклмнопрстуфхцчшщъьюя'); 
// abvgdezhziyklmnoprstufhtschshshtayyuya

latinToCyrilic('abvgdezhziyklmnoprstufhtschshshtayyuya'); 
// абвгдежзийклмнопрстуфхцчшщъьюя
```


# Development

Run `yarn install` to install dependencies.

Run `yarn test` to run tests.

# License

[MIT](LICENSE)
