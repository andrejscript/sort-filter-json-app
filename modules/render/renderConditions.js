const renderConditions = (val,list) => {
  for (const [k, v] of Object.entries(val)) {
    list.innerHTML += `{ <li class="conditions">${k}</li> } <br>`;

    for (let i in v) {
      if (typeof v[i] === 'string') {
        list.innerHTML += `[ <li>${v[i]}</li> ] <br>`;
      } else if (Array.isArray(v[i]) === false) {
        list.innerHTML += `{ <li>${Object.keys(v[i])} 
                              : ${Object.values(v[i])}</li> 
                            } <br>`;
      }
    }

  }
}
export default renderConditions;
