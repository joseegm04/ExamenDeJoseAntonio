const mongoose = require('mongoose');

const uri = "mongodb+srv://12345678abc:12345678abc@cluster0.ulerm98.mongodb.net/rickandmorty?retryWrites=true&w=majority";

mongoose.connect(uri, {});
try {
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error: '));
    db.once('open', function (){
        console.log("Conectado a MongoDB");
    })
} catch (error) {
    console.log(error);
}


