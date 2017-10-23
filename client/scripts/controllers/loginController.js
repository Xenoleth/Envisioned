import * as requester from '/static/scripts/requesters/template-requester.js';
import * as loginService from '/static/scripts/services/loginService.js';

const run = (router) => {
    requester.getTemplate('login')
        .then((template) => {
            $('#content').html(template);
            
            loginService.run(router);
        })
        .catch(err => {
            console.log(err);
        })
};

export { run };