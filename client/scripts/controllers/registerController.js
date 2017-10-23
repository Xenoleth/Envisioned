import * as requester from '/static/scripts/requesters/template-requester.js';
import * as registerService from '/static/scripts/services/registerService.js';

const run = (router) => {
    requester.getTemplate('register')
        .then((template) => {
            $('#content').html(template);

            registerService.run(router);
        })
        .catch(err => {
            console.log(err);
        })
};

export { run };