const $ = require('jquery');
const requester = require('../requesters/template-requester');

const controller = () => {
    requester.getTemplate('home')
        .then((template) => {
            console.log('asdsad');
            $('content').html(template);
        })
        .catch(err => {
            console.log(err);
        })
};

module.exports = { controller };