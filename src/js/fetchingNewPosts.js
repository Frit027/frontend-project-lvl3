import differenceWith from 'lodash/differenceWith';
import uniqueId from 'lodash/uniqueId';
import axiosXML from './network';
import getParsedData from './parser';
import * as config from './constants';

export default (watchedState) => {
    const state = watchedState;

    state.feeds.forEach((feed) => {
        axiosXML(feed.rssURL)
            .then((document) => {
                const { items } = getParsedData(document);
                state.posts.push(
                    ...differenceWith(items, state.posts, (p1, p2) => p1.title === p2.title)
                        .map((post) => ({ ...post, id: uniqueId() })),
                );
                state.network.state = config.networkStates.valid;
            })
            .catch(() => {
                state.network.state = config.networkStates.invalid;
                state.network.errorKey = 'networkErrors.cannotLoad';
            });
    });
};
