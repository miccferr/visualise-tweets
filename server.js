const path = require('path')
const express = require('express')
const app = express();
const router = express.Router();
const devPath = express.static(path.join(__dirname, './client/public'))
const prodPath = express.static(path.join(__dirname, './client/build'));
const Promise = require("bluebird");
const mongoose = Promise.promisifyAll(require("mongoose"));

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  // serve from bundle folder
  app.use(prodPath);
} else {
  // serve from client folder
  app.use(devPath);

  // root route
  app.get('/', function (_, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

  app.get('/a', function (_, res) {
    res.send("asdasdasd")
  });
  // --------------------------------------------
  // Mongoose Connections + Data fetching routes
  // -------------------------------------------
  // Mongoose connection to MongoDB
  mongoose.connect('mongodb://localhost/Tweets', function (error) {
    if (error) {
      console.log(error);
    }
  });
  // ensure connection is open
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
      // we're connected!
       console.log('Connected to mongo server.');

      // Mongoose Schema definition
      const Schema = mongoose.Schema;
      const JsonSchema = new Schema({
        name: String,
        type: Schema.Types.Mixed
      });      
      // Mongoose Model definition
      let Json = mongoose.model('JString', JsonSchema, 'mic');

      /* GET json data. */
      // this is then called client side with an http get to express
      // router.get('/mapjson/:name', function (req, res) {
      app.get('/mapjson', function (req, res) {
        // es6 promise
        Json.find()                    
          .then(data => res.send(data))                    
          .catch(err => console.log(err.toString()));
          // .then(data => res.send(JSON.stringify(data)))
      });

      app.get('/test', (req,res) => res.send("asdasdasd"))
    });
  };




app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});


// EXAMPLE OF DATA
// ---------------------------------------------------
// {
//   "_id": ObjectId("589a67f884322b74f297e6b4"),
//   "entities": {
//     "user_mentions": [],
//     "symbols": [],
//     "hashtags": [],
//     "urls": [{
//       "url": "https://t.co/7b7WPZiZjc",
//       "indices": [58, 81],
//       "expanded_url": "https://www.instagram.com/p/BQOw_wilKAb/",
//       "display_url": "instagram.com/p/BQOw_wilKAb/"
//     }]
//   },
//   "text": "Leg day we meet again..... @ Fitness First Carnaby Street https://t.co/7b7WPZiZjc",
//   "created_at": ISODate("2017-02-08T00:36:07Z"),
//   "coordinates": {
//     "type": "Point",
//     "coordinates": [-0.13959894, 51.51248222]
//   },
//   "source": "Instagram",
//   "geo": {
//     "type": "Point",
//     "coordinates": [51.51248222, -0.13959894]
//   },
//   "id": NumberLong("829126629851004929")
// }