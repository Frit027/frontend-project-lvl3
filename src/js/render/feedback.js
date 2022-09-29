import i18next from 'i18next';

const getFeedback = () => {
  const p = document.createElement('p');
  p.classList.add('feedback', 'm-0', 'position-absolute', 'small');
  document.body.querySelector('form').parentNode.append(p);
  return p;
};

export default ({ key, isError }) => {
  let feedback = document.body.querySelector('form').parentNode.lastElementChild;
  if (!feedback.classList.contains('feedback')) {
    feedback = getFeedback();
  }
  feedback.classList.remove('text-danger', 'text-success');
  feedback.classList.add(isError ? 'text-danger' : 'text-success');
  feedback.textContent = i18next.t(key);
};
