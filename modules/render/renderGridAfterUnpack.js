const renderGrid = (list, type, key, arg, val) => {   
  type === 'Array' || type === 'Object' ? val = val.length : null;
  list.innerHTML += `<li>Type: ${type}</li> 
                     <li>Key: <u>${key}</u></li>
                     <li>${arg}: ${val}</li>`;
}

export default renderGrid;