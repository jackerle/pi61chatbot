const express = require('express')
const app = express()
const Conv = require('./fullfilment');
const bodyParser = require('body-parser');
require('actions-on-google')



app.post('/api', bodyParser.json(), (req, res) => {
  console.log("this here!")
  Conv.WebhookProcesing(req, res)

})


app.listen(3000, () => {
  console.log('Start server at po rt 3000.')
})





