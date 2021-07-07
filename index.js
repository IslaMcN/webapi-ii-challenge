require('dotenv').config();
const express = require('express');

const PostsRouter = require('./PostsRouter');

const server = express();

server.use(express.json());

server.use('/api/posts', PostsRouter);

server.get('/', (req, res) => {
    res.send(`
    <h1>Hello You!</h1>`);
});
const port = process.env.PORT || 2200
server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})