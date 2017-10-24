import * as requester from '/static/scripts/requesters/template-requester.js';
import * as getArticlesService from '/static/scripts/services/getArticlesService.js';

const run = (params) => {
    getArticlesService.single(params.id)
        .then((article) => {
            requester.getTemplate('singleArticle')
                .then((template) => {
                    $('#content').html(template({ article }));
                })
                .catch(err => {
                    console.log(err);
                });
        });

};

export { run };