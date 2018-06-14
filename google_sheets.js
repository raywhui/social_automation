var request = require('request');
// request('https://spreadsheets.google.com/feeds/list/1eINsOAYM4CgtzuMyFbePGoMSpLw2NCUwLT4CLeqGAvU/od6/public/values?alt=json', function(err, res, body){
//   console.log('error:', err);
//   console.log('statusCode:', res && res.statusCode);
//   console.log('body:', body);
// });

var url = 'https://spreadsheets.google.com/feeds/list/1eINsOAYM4CgtzuMyFbePGoMSpLw2NCUwLT4CLeqGAvU/od6/public/values?alt=json';
//var url = 'https://spreadsheets.google.com/feeds/list/0AtMEoZDi5-pedElCS1lrVnp0Yk1vbFdPaUlOc3F3a2c/od6/public/values?alt=json-in-script&callback=x'

// request.get({
//   url: url,
//   method: 'GET',
//   json: true
// }, (err,res,data) => {
//   console.log(err);
//   console.log(res.statusCode);
//   console.log('data:', data);
// });

request(url, function(err, res, body){
  // body = JSON.parse(body);
  console.log('body', body);
})
