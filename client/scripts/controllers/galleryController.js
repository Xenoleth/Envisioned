import * as requester from '/static/scripts/requesters/template-requester.js';
import * as getArticlesService from '/static/scripts/services/getArticlesService.js';

const run = () => {
    getArticlesService.all()
        .then((articles) => {
            console.log(articles);
            const imageUrls = articles.map(a => {
                return { image: a.image };
            });
            console.log(imageUrls);
            
            requester.getTemplate('gallery')
                .then((template) => {
                    $('#content').html(template({ imageUrls }));
                })
                .catch(err => {
                    console.log(err);
                });
        });   
};

export { run };