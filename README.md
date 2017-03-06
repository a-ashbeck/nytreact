# nytreact
Homework 15 for the Northwestern Coding Boot Camp.

This application is a personal New York Times app, that allows you to search articles via the NYT API, display the results, and then allows you to save them to your personal collection. You can then delete them as you please.

Click [**here**](https://mighty-spire-60207.herokuapp.com/) to see the app in production on Heroku.

## Setup

First clone this repo to your local directory.

Next, navigate to your repo in your command terminal, and enter:

`npm install`

This will ensure you have all the necessary NPM packages installed to run this generator.

Next, after ensuring you have MongoDB installed on your machine, you will need to run MongoDB Daemon with  `mongod` in the terminal, and `mongo` in another terminal window. This app uses Mongoose in order to schema Mongo.

Finally, run `webpack -w` to the the files compiled into a `bundle.js` file for the browser to read.
