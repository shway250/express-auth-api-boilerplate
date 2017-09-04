# **Basics Auth and API Boilerplate**
I put together a node app with a basic auth strategy that send data from a form to an API. I use PostgreSQL and Sequelize here, but you should be able to use whatever ORM you're comfortable with to spin up a data base and access the data. I also used EJS as a view engine, but you should be able to attach any front end tech you want (Angular, React). I tried to leave comments that would be useful to you.
## Getting Started
* Fork and Clone this repo down to your local machine
* Run `npm install` to install dependencies
  * Use `npm run lint:js` to lint your JS
  * Use `npm run lint:css` to lint your CSS
  * Use `npm test` to run tests

## To get the app up and running:
* make a .env file and add `SESSION_SECRET=anyword` where anyword is whatever you want your secret to be.
* you need to make a user model in your database, since I'm using sequelize I typed `sequelize model:create --name user --attributes email:string,name:string,password:string`
* you then need to migrate your database to your app. Since I'm using sequelize I typed `sequelize db:migrate`. 
* you'll need to add a model for every thing you want to be able to pass from a form to your db. To use a PUT method in node.js you need to grab the form data with AJAX and then pass it to your PUT method in the backend. Look into the frontend JS in the public folder to see what I mean.