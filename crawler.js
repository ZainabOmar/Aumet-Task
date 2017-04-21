var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');

var url = "http://www.medicaltenders.com/egypt-medical-tenders.htm";

console.log("Visiting page " + url);

request(url, function(error, response, body) {
	if(error) {
		console.log("Error: " + error);
	}
	console.log("Status code: " + response.statusCode);
	if(response.statusCode === 200) {
		var $ = cheerio.load(body);
		console.log("Page title:  " + $('title').text());
	}
});
