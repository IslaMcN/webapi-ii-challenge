const express = require('express');

const PostsRouter = require('./PostsRouter');

const server = express();

server.use(express.json());

server.use('/api/posts', PostsRouter);

server.get('/', (req, res) => {
    res.send(`
    <h1>Hello You!</h1>`);
});
const port = 4000
server.listen(4000, () => {
    console.log(`Server running on port ${port}`)
})