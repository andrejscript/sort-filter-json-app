import createPathToDB from './createPath';
import clearConditions from '../auxiliaryModes/clearConditions';

const toSelectDB = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i].addEventListener('click', (e) => {
      clearConditions();
      let receivedPath = e.target.dataset.db;
      createPathToDB(receivedPath);
    });
  }
};

export default toSelectDB;