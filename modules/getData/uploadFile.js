import unpackObject from '../unpackObject'

const uploadFile = (btn) => {
  btn.addEventListener('change', (e) => {
    // clearConditions(count, list, listRes, mainSet, setToJSON);

    try {
      const upload = e.target.files[0];
      const reader = new FileReader();
      reader.addEventListener(
        'load',
        (() => {
          return (e) => {
            let fileSet = JSON.parse(e.target.result);
            unpackObject(fileSet);
          };
        })(upload)
      );
      reader.readAsText(upload);
    } catch (ex) {
      console.log(ex);
    }
  });

  btn.addEventListener('click', () => {
    btn.value = '';
  });
};

export default uploadFile;