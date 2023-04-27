const mongoose = require('mongoose')
require('dotenv').config();
const url = `mongodb+srv://inShare:xtHaFTrzKjTY5g4s@cluster0.ulj039q.mongodb.net/?retryWrites=true&w=majority`;
function connectDB(){
const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })
}

module.exports=connectDB;