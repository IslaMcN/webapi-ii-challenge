const express = require('express');
const db = require('./data/db');
const router = express.Router();



router.get('/', (req, res) => {
    db.find()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500).json({error: "The posts information could not be retrieved"})
    })
})

router.post('/', (req, res) => {
    const info = req.body;
    console.log('info', info)
    if(!info.title || !info.contents){
        res.status(400).json({message: "Please provide title and contents for the post"})
    }else{
        db.insert(req.body)
    .then(data => {
        res.status(201).json(info)
    })
}}),
    
    

router.post('/api/posts/:id/comments', (req, res) => {
    const id = req.params.id;
    data.insert(id)
    .then(data => {
        
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({message: 'Error adding the data'})
    })
})

module.exports = router;