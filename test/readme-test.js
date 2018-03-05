const stackhash = require('../lib/stackhash')

const error1 = new Error('i am the error')
const error2 = { foo: 'bar' }
const error3 = undefined

console.log(stackhash(error1))
console.log(stackhash(error2))
console.log(stackhash(error3))

// with salt
stackhash.addSalt('aaaaaaaaaa')
console.log(stackhash(error1))
