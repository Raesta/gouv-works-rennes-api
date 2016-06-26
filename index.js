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
      case 500:
        return callback('SERVER_ERROR');
        break;
    }
  });
}

Works.prototype.roadworks = function(params, callback) {
  var url = apiUrl + 'roadworks?';
  if (params && params.epsg) url = (url.substr(url.length-1, 1) === '?' ? url + 'epsg=' + params.epsg : url + '&epsg=' + params.epsg);
  if (params && params.dim) url = (url.substr(url.length-1, 1) === '?' ? url + 'dim=' + params.dim : url + '&dim=' + params.dim);
  if (params && params.period) url = (url.substr(url.length-1, 1) === '?' ? url + 'period=' + params.period : url + '&period=' + params.period);
  if (params && params.city) url = (url.substr(url.length-1, 1) === '?' ? url + 'city=' + params.city : url + '&city=' + params.city);
  if (params && params.sector) url = (url.substr(url.length-1, 1) === '?' ? url + 'sector=' + params.sector : url + '&sector=' + params.sector);
  req('GET', url, function(error, result) {
    if (error) return callback(error);
    else return callback(null, result);
  });
}

Works.prototype.roadwork = function(params, callback) {
  if (!params) return callback('MISSING_PARAMETERS');
  if (!params.id) return callback('MISSING_ID');
  var url = apiUrl + 'roadwork/' + params.id + '?';
  if (params && params.dim) url = (url.substr(url.length-1, 1) === '?' ? url + 'dim=' + params.dim : url + '&dim=' + params.dim);
  if (params && params.epsg) url = (url.substr(url.length-1, 1) === '?' ? url + 'epsg=' + params.epsg : url + '&epsg=' + params.epsg);
  req('GET', url, function(error, result) {
    if (error) return callback(error);
    else return callback(null, result);
  });
}

Works.prototype.roadworkInfo = function(params, callback) {
  if (!params) return callback('MISSING_PARAMETERS');
  if (!params.id) return callback('MISSING_ID');
  var url = apiUrl + 'roadwork/' + params.id + '/info?';
  if (params && params.dim) url = (url.substr(url.length-1, 1) === '?' ? url + 'dim=' + params.dim : url + '&dim=' + params.dim);
  if (params && params.epsg) url = (url.substr(url.length-1, 1) === '?' ? url + 'epsg=' + params.epsg : url + '&epsg=' + params.epsg);
  req('GET', url, function(error, result) {
    if (error) return callback(error);
    else return callback(null, result);
  });
}

Works.prototype.roadworkDetour = function(params, callback) {
  if (!params) return callback('MISSING_PARAMETERS');
  if (!params.id) return callback('MISSING_ID');
  var url = apiUrl + 'roadwork/' + params.id + '/info?';
  if (params && params.dim) url = (url.substr(url.length-1, 1) === '?' ? url + 'dim=' + params.dim : url + '&dim=' + params.dim);
  if (params && params.epsg) url = (url.substr(url.length-1, 1) === '?' ? url + 'epsg=' + params.epsg : url + '&epsg=' + params.epsg);
  req('GET', url, function(error, result) {
    if (error) return callback(error);
    else return callback(null, result);
  });
}

Works.prototype.sectors = function(params, callback) {
  var url = apiUrl + 'sectors?';
  if (params && params.format) url = url + 'format=' + params.format;
  req('GET', url, function(error, result) {
    if (error) return callback(error);
    else return callback(null, result);
  });
}

module.exports = Works;
