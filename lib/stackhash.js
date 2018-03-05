const crypto = require('crypto')

let salt = null

function stackhash (error) {
  if (!error) return null
  let hashIt = error.stack ? error.stack : error.toString()
  if (salt) hashIt += salt
  const sh = crypto
  .createHash('md5')
  .update(hashIt)
  .digest('hex')
  .substr(-8)
  return `${error.stack? 'S' : 'E'}-${sh.substr(0, 4)}-${sh.substr(4, 4)}`.toUpperCase()
}

stackhash.addSalt = function (aSalt) {
  salt = aSalt
}

module.exports = stackhash
