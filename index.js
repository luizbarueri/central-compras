var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

var conString = "postgres://ddkpxdyr:lWuAUjv1fnAHTRq3wjrrUAGjjTkgVTcE@kesavan.db.elephantsql.com/ddkpxdyr" //Can be found in the Details page
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
//   client.query('SELECT NOW() AS "theTime"', function(err, result) {
    client.query('SELECT * FROM "public"."contatos" LIMIT 100', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    // console.log(result.rows[0].theTime);
    console.log(result.rows[1]);
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});