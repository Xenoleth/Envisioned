const { Router } = require('express');
const { ObjectID } = require('mongodb');

const attachTo = (app, data) => {
    const router = new Router();

    router
        .post('/post', (req, res) => {
            const post = {
                userId: req.body.userId,
                username: req.body.userName,
                title: req.body.title,
                image: req.body.image,
                content: req.body.content,
                date: req.body.date
            };

            data.posts.create(post);      

            res.send('Post created');
        })
        .get('/post', (req, res) => {
            const postId = new ObjectID(req.query.postId);
            data.posts.findById(postId)
                .then((post) => {
                    res.json(post);
                });
        })
        .get('/all', (req, res) => {
            data.posts.getAll()
                .then((posts) => {
                    res.json(posts);
                });
        });

    app.use('/api/articles', router);
};

module.exports = { attachTo };