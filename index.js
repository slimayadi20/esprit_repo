const express = require('express'),
    mongoose = require('mongoose'),
    Cours = require('./models/Cours.js'),
    Matieres = require('./models/Matieres.js'),
    cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());

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
path:   /cours
select * cours
*/

app.get('/cours', async (req, res) => {
    res.send(await Cours.find())

});

app.get('/cours/:name', async (req, res) => {
    try {

        const cours = await Cours.find({ name: req.params.name });
        res.send(cours);
    } catch (err) {
        err.statusCode = 404;
        next(err);
    }

});


app.get('/matieres', async (req, res) => {
    res.send(await Matieres.find())
});



/*
method: GET 
path:   /cours
select * matiers
*/


app.get('/matieres/:id', async (req, res) => {
    try {

        const matieres = await Matieres.find({ id: req.params.id });
        res.send(matieres);
    } catch (err) {
        err.statusCode = 404;
        next(err);
    }

});



/*
method: GET
path:   /:id
*/



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
