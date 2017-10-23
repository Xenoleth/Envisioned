const cache = {};

const getTemplate = (name) => {
    const promise = new Promise((res, rej) => {
        if(cache[name]) {
            resolve(cache[name]);
            return;
        }

        const url = `templates/${name}.handlebars`;
        $.get(url, (html) => {
            const template = Handlebars.compile(html);
            cache[name] = template;
            resolve(template);
        });
    });
    return promise;
};

module.exports = { getTemplate };