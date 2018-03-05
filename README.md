# StackHash
## Visually-recognizable unified hash of an error stack

## Installation

```bash
npm i --save stackhash
```

## Example usage

```javascript
const stackhash = require('../lib/stackhash')

const error1 = new Error('i am the error')
const error2 = { foo: 'bar' }
const error3 = undefined

console.log(stackhash(error1))
// S-C313-9876
console.log(stackhash(error2))
// E-1B9D-F8B9
console.log(stackhash(error3))
// null

// with salt
stackhash.addSalt('aaaaaaaaaa')
console.log(stackhash(error1))
// S-7CE8-9434
```
