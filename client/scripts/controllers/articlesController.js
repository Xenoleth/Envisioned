import * as requester from '/static/scripts/requesters/template-requester.js';
import * as getArticlesService from '/static/scripts/services/getArticlesService.js';

const run = (router) => {
    getArticlesService.all()
        .then((articles) => {
            articles.sort((a, b) => {
                if (a.date < b.date) {
                    return 1;                    
                }
                if (a.date > b.date) {
                    return -1;                    
                }
                  return 0;
            });

            requester.getTemplate('articles')
                .then((template) => {
                    $('#content').html(template({ articles }));
                })
                .catch(err => {
                    console.log(err);
                })
        });
};

export { run };