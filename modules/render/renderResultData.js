const renderResultData = (resObj) => {
  const resultField = document.querySelector('#result'),
    listRes = document.createElement('ul');
  let output,
    count = 0;

  resultField.appendChild(listRes);

  for (let set in resObj) {
    for (let k in resObj[set]) {
      let text = '';
      let item = resObj[set][k];
      count++;
      for (const i in item) {
        text += `<span>${i}:</span> ${item[i]}, `;

        output = `<li>${count}. { ${text} } </li>`;
      }
      listRes.innerHTML += output;
    }
  }
};
export default renderResultData;
