const express = require('express'),
    mongoose = require('mongoose'),
    Cours = require('./models/Cours.js');
//  cors = require('cors');
//


const app = express();

// app.use(cors());

// start the server

app.listen(4000, () => {
    console.log('Server is up on port 4000');
})

// connect to db
mongoose.connect('mongodb://localhost:27017/esprit', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to mongoDB"))
    .catch((err) => console.log(err));

/*
method: GET 
path:   /
*/

app.get('/cours', async (req, res) => {
    res.send(await Cours.find({}))
});

/*
method: GET
path:   /:id
*/

app.get('/cours/:id', async (req, res, next) => {
    try {
        const cours = await Cours.findById(req.params.id);
        res.send(cours);
    } catch (err) {
        err.statusCode = 404;
        next(err);
    }
})

// error handler
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    res.status(err.statusCode).send({
        error: {
            message: err.message,
            name: err.name || 'InternalServerError'
        }
    })
})

// add a 404 route

app.use('*', (req, res) => {
    res.status(404).send({
        error: {
            message: "Not found!",
            name: "NotFound"
        }
    })
})
