export default (doc) => ({
  title: doc.querySelector('title').textContent,
  description: doc.querySelector('description').textContent,
  items: Array
    .from(doc.querySelectorAll('item'))
    .map((item) => ({
      title: item.querySelector('title').textContent,
      description: item.querySelector('description').textContent,
      link: item.querySelector('link').textContent,
    })),
});
