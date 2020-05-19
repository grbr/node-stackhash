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
// stackhash-S672362F9
console.log(stackhash(error2))
// stackhash-E1B9DF8B9
console.log(stackhash(error3))
// stackhash-null

// with salt
stackhash.addSalt('aaaaaaaaaa')
console.log(stackhash(error1))
// stackhash-SEBAAD9E6
```
