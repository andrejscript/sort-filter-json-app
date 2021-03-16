import renderIncomingData from './render/renderIncomingData';
import convertSet from './convertSet';

const unpackObject = (data) => {
  let count = -1;
  Object.entries(data).forEach(([key, value]) => {
    if (value !== null && Array.isArray(value)) {
      count++;
      renderIncomingData('Array', key, value, count);
    } else if (typeof value === 'object') {
      count++;
      renderIncomingData('Object', key, value, count);
    } else {
      count++;
      renderIncomingData('Primitives', key, value, count);
    }

  });

  convertSet(data)
};

export default unpackObject;
