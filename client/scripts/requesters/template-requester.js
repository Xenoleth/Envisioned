const cache = {};

const getTemplate = (name) => {
    const promise = new Promise((res, rej) => {
        if(cache[name]) {
            res(cache[name]);
            return;
        }

        const url = `/static/templates/${name}.handlebars`;
        $.get(url, (html) => {
            const template = Handlebars.compile(html);
            cache[name] = template;
            res(template);
        });
    });
    return promise;
};

export { getTemplate };