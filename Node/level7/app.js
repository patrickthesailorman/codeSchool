var redis = require('redis');
var client = redis.createClient();
client.set('name', 'todd');
var result = client.get('question', function(err, data) {
  console.log(data);
});