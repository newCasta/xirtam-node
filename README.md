# Xirtam

Xirtam is a library base on a class call Matrix that let you use it like if it where a matrix


## Installation

Use the class with the deno url

npm
```bash
npm i xirtam
```

pnpm
```bash
pnpm i xirtam
```
    
## Usage/Examples

```ts
import { Matrix } from 'xirtam'

type Tuple = [number, number]

const matrix = new Matrix<Tuple>([0, 1], [1, 2], [2, 3])

console.log(matrix.hasItem([0, 1])) // Expected: true
```


## License

[MIT](https://github.com/siCasta/xirtam-node/blob/main/LICENSE)
