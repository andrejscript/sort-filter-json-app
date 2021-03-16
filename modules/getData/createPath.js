import getDataFetch from './getDataFetch';

const createPathToDB = (arg) => {
  let path = `/db/${arg}.json`;
  getDataFetch(path);
}

export default createPathToDB;