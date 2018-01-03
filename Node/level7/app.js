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

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var socket = require('socket.io');
var io = socket.listen(server);

var redis = require('redis');
var redisClient = redis.createClient();

io.sockets.on('connection', function(client) {
    redisClient.lrange('questions', 0, -1, function(err, questions) {
    questions.forEach(function(question) {
      client.emit('question', question);
    });
  });
  client.on('answer', function(question, answer) {
    client.broadcast.emit('answer', question, answer);
  });

  client.on('question', function(question) {
    if(!client.question_asked) {
      client.question_asked = true;
      client.broadcast.emit('question', question);
      // add the question to the list here
      redisClient.lpush('questions', question);
    }
  });
});