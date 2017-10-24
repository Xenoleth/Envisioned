import $ from 'jquery';
import * as requester from '/static/scripts/requesters/template-requester.js';

const run = () => {
    requester.getTemplate('home')
        .then((template) => {
            $('#content').html(template);
        })
        .catch(err => {
            console.log(err);
        });
};

export { run };