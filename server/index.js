var express = require('express')
var app = express()
var cors = require('cors');
app.use(cors());

app.get('/', function (req, res) {
 
    var random = Math.round(Math.random() * 10);
    console.log(random);
    res.send(random.toString())

});



app.listen(5001, function () {
  console.log('Example app listening on port 8000!')
})