// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
const lineProc = require('./lineapi') 



exports.WebhookProcesing  = function (req, res) {
  const agent = new WebhookClient({ request: req, response: res });
  console.info('agent set');
  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  agent.handleRequest(intentMap);
}
function welcome(agent) {
  agent.add("Success Congrate!");
}