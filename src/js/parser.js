export default (doc, rssURL) => {
  const feed = {
    title: doc.querySelector('title').textContent,
    description: doc.querySelector('description').textContent,
    rssURL,
  };
  const posts = Array
    .from(doc.querySelectorAll('item'))
    .map((item) => ({
      title: item.querySelector('title').textContent,
      description: item.querySelector('description').textContent,
      link: item.querySelector('link').textContent,
    }));
  return { feed, posts };
};
