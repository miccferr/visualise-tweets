const path = require('path')
const express = require('express')
const Promise = require("bluebird");
const mongoose = Promise.promisifyAll(require("mongoose"));


module.exports = {
  app: function () {
    const app = express();
    const router = express.Router();
    const indexPath = path.join(__dirname, 'index.html');
    const publicPath = express.static(path.join(__dirname, '../dist'));   
        
    app.use(publicPath);
    app.get('/', function (_, res) {
       res.sendFile(path.resolve(indexPath))       
    });
    
    // Mongoose connection to MongoDB
    mongoose.connect('mongodb://localhost/Tweets', function (error) {
      if (error) {
        console.log(error);
      }
    });

    // Mongoose Schema definition
    const Schema = mongoose.Schema;
    const JsonSchema = new Schema({
      name: String,
      type: Schema.Types.Mixed
    });

    // Mongoose Model definition
    let Json = mongoose.model('JString', JsonSchema, 'Tweets');

    /* GET json data. */
    // this is then called client side with an http get to express
    // router.get('/mapjson/:name', function (req, res) {
    app.get('/mapjson', function (req, res) {      
        // es6 promise
        Json.find()
          .then(data => console.log(data))
          .then(data => res.send(data))
          .catch(err => console.log(err.toString()));

    });

    // /* GET layers json data. */
    // router.get('/maplayers', function (req, res) {
    //   Json.find({}, {
    //     'name': 1
    //   }, function (err, docs) {
    //     res.json(docs);
    //   });
    // });

    return app;
  }
}



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