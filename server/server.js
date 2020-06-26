var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var app = express()

var db = require('./utils/Databaseutils')
var userutils = require('./utils/Userutils')

//Connection mongoDb when start server.js
db.setUpConnection();

app.use( bodyParser.json() );

// Allow requests from any origin
app.use(cors());

app.use(express.static('build'));
app.set('views', './build');

app.get('/', (req, res) => {
	res.sendFile(`${process.cwd()}/build/index.html`);
});


app.get('/users', (req, res) => {

	userutils.listusers().then( (data) => {
		res.send(data)
	});
})

app.post('/users', (req, res) => {

	userutils.createusers(req.body).then( (data) => {
		//console.log("post request body: ",req.body)
		//console.log("post data: ", data)
		res.send(data)
	});

})

app.delete('/users/:id', (req, res) => {
	userutils.deleteusers(req.body).then((data)=>{
		//console.log("delete request body: ",req.body)
		//console.log("server data:",data)
		res.send(data)
	})
  })

app.listen(3000, function () {
  console.log(`Example app listening on port 3000!`)
})