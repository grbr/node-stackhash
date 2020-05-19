const crypto = require('crypto')

let salt = null

function stackhash (error) {
  if (!error) return 'stackhash-null'
  let hashIt = error.stack ? error.stack : error.toString()
  if (salt) hashIt += salt
  const sh = crypto
  .createHash('md5')
  .update(hashIt)
  .digest('hex')
  .substr(-8)
  return `stackhash-${error.stack? 'S' : 'E'}${sh.toUpperCase()}`
}

stackhash.addSalt = function (aSalt) {
  salt = aSalt
}

module.exports = stackhash
