import * as requester from '/static/scripts/requesters/template-requester.js';
import * as postArticleService from '/static/scripts/services/postArticleService.js';

const run = (router) => {
    requester.getTemplate('postArticle')
        .then((template) => {
            $('#content').html(template);
            
            postArticleService.run(router);
        })
        .catch(err => {
            console.log(err);
        })
};

export { run };