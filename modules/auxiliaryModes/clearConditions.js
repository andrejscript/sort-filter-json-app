import deleteObjProps from './deleteObjProps';
import {fitSet} from '../convertSet';

const clearConditions = () => {
  document.querySelector('#result').innerHTML = '';
  document.querySelector('.enter-output').innerHTML = '';
  localStorage.clear();
  deleteObjProps(fitSet);
  // deleteObjProps(json);
}

export default clearConditions;
