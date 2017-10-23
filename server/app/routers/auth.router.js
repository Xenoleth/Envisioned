const { Router } = require('express');
const passport = require('passport');

const attachTo = (app, data) => {
    const router = new Router();

    router
        .post('/sign-in', (req, res, next) => {
            data.users.findByUsername(req.body.username)
                .then((user) => {
                    return res.json({ id: user._id });
                })
                .catch((err) => {
                    return res.send('No such user was found');
                });
            // passport.authenticate('local', (err, user, info) => {
            //     req.logIn(user, (err) => {
            //         if (err) { 
            //             return next(err); 
            //         }
            //         req.user = user;
            //         return res.json({ id: req.user._id });
            //     });
            // })(req, res, next);
        })
        .post('/register', (req, res) => {
            const user = {
                username: req.body.username.toLowerCase(),
                password: req.body.password.toLowerCase()
            }

            data.users.create(user);

            res.send('Registered');
        })
        .get('/logout', (req, res) => {
            req.logout();
            res.send('Logged out');
        });

    app.use('/api/auth', router);
};

module.exports = { attachTo };