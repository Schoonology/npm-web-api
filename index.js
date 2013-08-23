'use strict'
var request = require('request')
  , npmapi = {}

npmapi.getModulesByUser = getModulesByUser
function getModulesByUser(username, callback) {
  request.get('http://registry.npmjs.org/-/by-user/' + username, function (err, response, body) {
    if (err) {
      callback(err)
      return
    }

    try {
      body = JSON.parse(body)
    } catch (e) {
      callback(e)
      return
    }

    callback(null, body[username])
  })
}

module.exports = npmapi
