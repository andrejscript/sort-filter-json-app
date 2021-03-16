import 'regenerator-runtime/runtime';
import unpackObject from '../unpackObject';

const getDataFetch = async (url, set) => {
  let mainSet = {};
  let response = await fetch(url);
  mainSet = await response.json();
  unpackObject(mainSet);
}

export default getDataFetch;