const express = require('express');
const data = require('./data/db');
const router = express.Router();

router.post('/api/posts', (req, res) => {
    data.add(req.body)
    .then(dat => {
        res.status(201).json(dat);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({message: 'Error adding the data'});
    });
});