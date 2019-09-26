var express = require('express'),
    app     = express({mergeParams: true});
    bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.sendFile("index.html");
});

app.use('/api/todos', todoRoutes);

app.listen(process.env.PORT, function() {
	// body...
	console.log("APP IS RUNNING ON PORT " + process.env.PORT);
})