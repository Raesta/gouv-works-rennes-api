var request = require('request');
var apiUrl = 'http://travaux.data.rennesmetropole.fr/api/';

function Works() {
  this.apiUrl = apiUrl;
  this.request = req;
}

function req(method, apiUrl, callback) {
  var options = {};
  options.method = method;
  options.url = apiUrl;
  options.headers = { 'Content-Type': 'application/json' };
  request(options, function (error, response, body) {
    if (error) return callback(null, JSON.parse(error));
    switch (response.statusCode) {
      case 200:
        return callback(null, JSON.parse(body));
        break;
      case 404:
        return callback('NOT_FOUND');
        break;
    }
  });
}

module.exports = Works;
