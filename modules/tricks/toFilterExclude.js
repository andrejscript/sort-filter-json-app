const toFilterExclude = (arr, [rule, state]) => {
  console.log(rule, state)
  return arr.filter(item => item[rule] !== state);
}
export default toFilterExclude;