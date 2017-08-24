// run the dbTester to make sure mongodb is running correctly

var mongoose = require('mongoose');
var config = require('../config/config');
mongoose.connect(config.mongoUrl);

// We have a pending connection to the test database runnning on localhost.
// We now need to get notified if we connect successfully or if a connection error occrus
// MAKE SURE MONGOD is RUNNING

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));




// Once our connection opens, our callback will be called. For brevity, let's assume that all
// following code is within this callback.
callback = () => {
    // With Mongoose, everything is derived from a Schema. Let's get a reference to it and define our kitens.
    var kittySchemea = mongoose.Schema({
        name: String
    });
    // So far so good. We've got a schema with one perperty, name, which will be a string. The next step
    // compiling our schema into a model
    var Kitten = mongoose.model('Kitten', kittySchema);
    /*
    A model is a class which we constrcut documents. In this case, each document will be a kitten with properties and hebaviors
    as declared in our schema. Let's create a kitten document representing the little guy we
    just met on the sidewalk outside
    */
    var silence = new Kitten({ name: 'Silience' });
    console.log(silence.name);  // 'silence'
    // Kittens can meow, so le'ts take a look at how to add "speak" functioanility to our documents
    // NOTE: methods must be added to the schema before compiling it with mongoose.model()
    kitteySchema.methods.speak = function() {
        var greeting = this.name
            ? "Meow name is " + this.name
            : "I don't have a name";
        console.log(greeting);
    }
    var Kitten = mongoose.model('Kitten', kittySchema);
    // Functions added to the methods property of a schema get compiled
    // into the Model prototype and exposed on each document instance
    var fluffy = new Kitten({ name: 'fluffy' });
    fluffy.speak(); // "meow name is fluffy"
    // Each document can be saved to the database by calling its save method.
    // The first arugment to the callback will be an error if any occurred.
    fluffy.save(function (err, fluffy) {
        if (err) return console.error(err);
        fluffy.speak();
    });
    // We can access all of kitten documents through our Kitten model
    Kitten.find((err, kittens) => {
        if (err) return console.error(err);
        console.log(kittens);
    });
    // Mongoose supports MongoDBs rich querying syntax
    // Kitten.find({ name: /^fluff/}, callback);

}


db.once('open', function() {
    // we're connected
    callback();
});
