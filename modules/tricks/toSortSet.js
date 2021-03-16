const toSortSet = (set, rule) => {
  // console.log(set, rule);
  
  return set.sort((a, b) => a[rule] > b[rule] ? 1 : -1);
}

export default toSortSet;