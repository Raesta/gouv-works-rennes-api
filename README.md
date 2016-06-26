gouv-works-rennes-api
======

[![NPM](https://nodei.co/npm/gouv-works-rennes-api.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/gouv-works-rennes-api/)

[![npm version](https://badge.fury.io/js/gouv-works-rennes-api.svg)](https://badge.fury.io/js/gouv-works-rennes-api)

A Node wrapper for the [works rennes api](http://travaux.data.rennesmetropole.fr/).
---

### Installation
```javascript
$ npm install gouv-works-rennes-api
```
or
```javascript
$ npm install git://github.com/Raesta/gouv-works-rennes-api.git
```

### Example
```javascript
var WorksRennesAPI = require('gouv-works-rennes-api');

var WorksRennes = new WorksRennesAPI();

// roadworks with no parameters
WorksRennes.roadworks(null, function(error, result) {
  console.log(error, result);
});

// Specific sector south
WorksRennes.roadworks({sector: 's'}, function(error, result) {
  console.log(error, result);
});
```
