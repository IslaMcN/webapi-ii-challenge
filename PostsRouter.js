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
    db.insert(req.body)
    .then(data => {
        if(!title || !contents){
            res.status(400).json({message: "Please provide title and contents for the post"})
        }else{
            res.status(201).json(data)
        }
    })
    .catch(error => {
        res.status(500).json({error: "There was an error while saving the post to the database"})
    });
});

// router.post('/api/posts/:id/comments', (req, res) => {
//     const id = req.params.id;
//     data.insert(id)
//     .then(data => {
//         if(data){
//             res.status(201).json(data)
//         }if(!text){
//             res.status(400).json({errorMessage: "Please provide text for the comment"})
//         }else{
//             res.status(404).json({message: "The post with the specified ID does not exist."})
//         }
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json({message: 'Error adding the data'})
//     })
// })

module.exports = router;