const express = require('express')
const line = require('@line/bot-sdk');
const app = express()
require('dotenv').config();

const config = {
  channelAccessToken: process.env.channelAccessToken,
  channelSecret: process.env.channelSecret
};

const client = new line.Client(config);


app.post('/', line.middleware(config), (req, res) => {
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

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.listen(3000, () => {
  console.log('Start server at po rt 3000.')
})