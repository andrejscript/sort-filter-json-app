import addNoticeAfterConvert from './addNotices';

const toJSONBtn = ((set) => {
  const btnToJSON = document.querySelector('#toJSON');

  btnToJSON.addEventListener('click', () => {
    btnToJSON.classList.add('visited');
    let json = JSON.stringify(set);

    if (Object.keys(set).length > 0) {
      addNoticeAfterConvert('filled', btnToJSON);
      localStorage.setItem('json', json);
    } else {
      addNoticeAfterConvert('empty', btnToJSON);
    } 

  });

});

export default toJSONBtn;