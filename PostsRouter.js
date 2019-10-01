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
    
    

router.post('/:id/comments', (req, res) => {
    const id = req.params.id;
    const text = req.body;
    if(id){
        db.insertComment(text)
        .then(comment => res.json(comment))
        .catch(err => console.log(err))
    }
   
   

    
    
})

router.get('/:id', (req, res) => {
    const id = req.body;
    db
    .insert(id)
    .catch(err => {
        res.status(500).json({error: "The post info could not be retrieved."})
    })
    if(id !== id){ 
        db
        res.status(404).json({message: "The post with the specified ID does not exist"})
    }else{
        db
        .then(
        res.status(200).json(id))
    }
    
})

module.exports = router;