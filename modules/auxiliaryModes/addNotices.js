const addNoticeAfterConvert = (option, btn) => {
  const saveBlock = document.querySelector('#saveBlock'),
    p = document.createElement('p');

  p.classList.add('to-json-prompt');

  if (option === 'filled') {
    p.innerHTML = 'Local storage has updated';
  } else {
    p.innerHTML = 'Select some JSON above';
    p.classList.add('error');
  }

  setTimeout(() => {
    saveBlock.appendChild(p);
  }, 600);
  setTimeout(() => {
    saveBlock.removeChild(p);
    btn.classList.remove('visited');
  }, 2500);
};

export default addNoticeAfterConvert;
