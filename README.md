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

Other methods

```ts
import { Matrix } from 'xirtam'

const arr1 = [0,1]
const arr2 = [0,1]
const test = [0,1]

console.log(Matrix.compare(arr1, test)) // Expected: true
console.log(Matrix.compareMany(arr1, arr2, test)) // Expected: true
```


## License

[MIT](https://github.com/siCasta/xirtam-node/blob/main/LICENSE)
