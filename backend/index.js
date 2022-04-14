const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const routesHandler = require('./routes/handler.js');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', routesHandler);

// DB Connection
mongoose.connect(process.env.DB_URI, {useNewUrlParser:true, useUnifiedTopology:true})
.then( () => {
    console.log('DB Connected!');
})
.catch( (err) => {
    console.log(err);
});


const PORT = process.env.PORT || 5000; // backend routing port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
