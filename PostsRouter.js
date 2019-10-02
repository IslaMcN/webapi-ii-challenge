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
    const id = req.params.text;
    console.log(id)
    if(!id){
        res.status(404).json({message: "The post with the specified ID does not exist"})
    }else{
        db
   .insertComment(id)
   .then(data => {
       if(data){
       res.status(201).json(req.body)}
   })
   .catch(error => {
       res.status(500).json({error: "There was an error while saving the comment to the database."})
   })
    }if(!req.body.text){
        res.status(400).json({errorMessage: "Please provide text for the comment"})
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


router.get('/:id/comments', (req, res) => {
    const id = req.params.id;
    db.findCommentById(id)
    
    .then(data => {
        if(data[0]){
        res.status(200).json(data)}else{
            res.status(404).json({message: "The post with the specified ID does not exist."})
        }}
    )
    .catch(err => {
        res.status(500).json({error:"The comments info could not be retrieved."})
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    db.remove(id)
    .then(data => {
        if(data){
            res.status(200).json(data)
        }else{
            res.status(400).json({message: "That just does not exist."})
        }
    })
    .catch(err => {
        res.status(500).json({error: "Nope", err})
    }
    )
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    if (!req.body.title || !req.body.contents){
        res.status(400).json({message:"No"})
    }else{
        db
        .update(id, req.body)
        .then(data => {
            if (data){
                res.status(200).json(req.body);
            }else{
                res.status(404).json({message:"HEY! NO!"})
            }
        })
        .catch(err=>{
            res.status(500).json({error:"Nu-uh", err})
        })
    }
})
module.exports = router;