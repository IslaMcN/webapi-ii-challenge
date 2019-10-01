const express = require('express');

const dataRouter = require('./expressRouter');

const server = express();

server.use(express.json());

server.use('/api/data', dataRouter);

server.get('/', (req, res) => {
    res.send(`
    <h1>Hello You!</h1>`);
});
const port = 10000
server.listen(10000, () => {
    console.log(`Server running on port ${port}`)
})