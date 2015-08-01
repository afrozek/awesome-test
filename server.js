
//load express packages and create path
var express = require('express');
var app = express();
var path = require('path');

//home page
app.get('/',function(req,res){
	res.sendFile(path.join(__dirname + '/index.html'));
});


//ADMIN SECTION
//this section is using the express.Router() method and app.use method

	//admin router, create new instance of express router
	var adminRouter = express.Router();


	//MIDDLEWARE
		//adminRouter.use(); is used to define middleware
		adminRouter.use(function(req,res,next){
			//log each request to console
			console.log("request method: " + req.method + " | request url: " +req.url);

			//continue with the routes
			// next() lets express know to continue with the routing
			next();
		});

		adminRouter.param('someName',function(req,res,next,name){
			//where function(...,name) can be named as anything

			 //validations
			 //take place
			 //here
			console.log('Some validations being done on: ' + name);

			//after validations, save item to the req
			req.name = name; // where req.name can be named as anything

			// go to the next thing
			next();
		});




	//ROUTES
		//admin page , the dashboard
		adminRouter.get('/',function(req,res){
			res.send("I am the dashboard");
		});

		//users page /admin/users
		adminRouter.get('/users',function(req,res){
			res.send("I am the Users Page");
		});
			// /users/:name    
			// where 'name' is a variable name
			adminRouter.get('/users/:name',function(req,res){
				res.send('hello ' + req.params.name);
			});

		//posts page /admin/posts
		adminRouter.get('/posts',function(req,res){
			res.send('I am the Posts Page');
		});

		//parameters validated by in middleware section
		adminRouter.get('/hello/:someName',function(req,res){
		res.send("hey: " + req.name);
		});



	// apply routes to application
	// sets /admin as the index or root
	// all the other routes are relative to /admin
	app.use('/admin',adminRouter);


//LOGIN SECTION
//this section is using the app.route() method instead of the method above

app.route('/login')
	
	//get request
	.get(function(req,res){
		res.send("This is the login form");
	})

	.post(function(req,res){
		console.log('processing login');
		res.send('This is the login processing');
	});
//
app.listen(1337);
console.log('listening on port 1337');



