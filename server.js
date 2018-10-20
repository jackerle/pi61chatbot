'use strict';
const { WebhookClient } = require('dialogflow-fulfillment');
const { Card, Suggestion } = require('dialogflow-fulfillment');
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
const express = require('express')
const line = require('@line/bot-sdk');
const app = express()
require('dotenv').config();
//const {Conv} = require('./fullfilment');
const bodyParser = require('body-parser');
require('actions-on-google')

/*const config = {
  channelAccessToken: process.env.channelAccessToken,
  channelSecret: process.env.channelSecret
};

const client = new line.Client(config);*/
function WebhookProcesing(req, res) {
  const agent = new WebhookClient({ request: req, response: res });
  console.info('agent set');
  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  agent.handleRequest(intentMap);
}
function welcome(agent) {
  agent.add("Success Congrate!");
}
app.post('/api', bodyParser.json(), (req, res) => {
  console.log("this here!")
  WebhookProcesing(req, res)

})

/*app.get('/', (req, res) => {
  res.send('Hello World')
})*/
app.listen(3000, () => {
  console.log('Start server at po rt 3000.')
})





/*app.post('/', line.middleware(config), (req, res) => {
  Promise
      .all(req.body.events.map(handleEvent))
      .then((result) => res.json(result));
});

function handleEvent(event) {

  console.log(event);
  if (event.type === 'message' && event.message.type === 'text') {
      handleMessageEvent(event);
  } else {
      return Promise.resolve(null);
  }
}

function handleMessageEvent(event) {
  var msg = {
      type: 'text',
      text: 'สวัสดีครัช'
  };

  return client.replyMessage(event.replyToken, msg);
}
*/
