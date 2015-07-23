
//load express packages and create path
var express = require('express');
var app = express();
var path = require('path');


app.get('/',function(req,res){
	res.sendFile(path.join(__dirname + '/index.html'));
});


//admin section routes

	//admin router
	var adminRouter = express.Router();

	//admin page , the dashboard
	adminRouter.get('/',function(req,res){
		res.send("I am the dashboard");
	});

	//users page /admin/users
	adminRouter.get('/users',function(req,res){
		res.send("I am the Users Page");
	});

	//posts page /admin/posts
	adminRouter.get('/posts',function(req,res){
		res.send('I am the posts page');
	});



	// apply routes to application
	// uses /admin as the index or root
	// all the other routes are relative to /admin
	app.use('/admin',adminRouter);

app.listen(1337);
console.log('listening on port 1337');



