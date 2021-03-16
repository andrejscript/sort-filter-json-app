import clearConditions from './clearConditions';
const btnReset = document.querySelector('#resetBtn');

const toResetBtn = () => {
  btnReset.addEventListener('click', () => {
    clearConditions();
  });
}

export default toResetBtn;