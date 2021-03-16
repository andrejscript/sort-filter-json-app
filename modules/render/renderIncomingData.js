import renderGrid from './renderGridAfterUnpack';
import renderConditions from './renderConditions';

let enterDataField = document.querySelector('.enter-output');

const renderIncomingData = (type, key, value, count) => {
  let list = document.createElement('ul'),
    sublist = document.createElement('ol'),
    objLength = Object.keys(value);

  count++;
  enterDataField.innerHTML += `<h4>Set ${count}:</h4>`;
  enterDataField.appendChild(list);

  if (type === 'Array') {
    renderGrid(list, 'Array', key, 'Length', value);
    list.appendChild(sublist);
    for (let k of value) {
      let text = '';
      for (let j in k) {
        text += ` ${j} : ${k[j]} <br>`;
      }
      sublist.innerHTML += `{ <li> ${text}</li> } <br>`;
    }
  } else if (type === 'Object') {
    renderGrid(list, 'Object', key, 'Length', objLength);

    list.appendChild(sublist);

    renderConditions(value, sublist);
  } else {
    renderGrid(list, 'primitive', key, 'Value', value);
  }
};


export default renderIncomingData;
