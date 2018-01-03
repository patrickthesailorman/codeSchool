var redis = require('redis');
var client = redis.createClient();
client.set('name', 'todd');
var result = client.get('question', function(err, data) {
  console.log(data);
});

var question1 = "Where is the dog?";
var question2 = "Where is the cat?";

client.lpush("questions", question1, function(err, reply) {
  console.log(reply);
});
client.lpush("questions", question2, function(err, reply) {
  console.log(reply);
});

client.lrange('questions', 0, -1, function(err, questions) {
  console.log(questions);
});   