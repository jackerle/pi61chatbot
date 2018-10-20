// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
function WebhookProcesing(req ,res){
  const agent = new WebhookClient({req,res});
  console.info('agent set');
  intentMap.set('Default Welcome Intent',welcome);
  agent.handleRequest(intentMap);
}

function welcome(agent){
  agent.add("Success Congrate!");
}

