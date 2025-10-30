const axios = require('axios');

export default (rssURL) => {
    const url = new URL('https://allorigins.hexlet.app/get');
    url.searchParams.set('disableCache', 'true');
    url.searchParams.set('url', rssURL);

    return axios
        .get(url.toString())
        .then((response) => {
            const parser = new DOMParser();
            return parser.parseFromString(response.data.contents, 'application/xml');
        });
};
