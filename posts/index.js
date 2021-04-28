const express = require('express');
// const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

const app = express();
//body parser is deprecated now
// app.use(bodyParser.json());
//so
app.use(express.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/post', (req, res) => {
    //create 4byte string id for each post
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    posts[id] = {
        id,
        title
    };

    res.status(201).send(posts[id]);
});

app.listen(4000, () => {
    console.log('listening on 4000');
})