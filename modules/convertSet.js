import toSortSet from './tricks/toSortSet';
import toFilterExclude from './tricks/toFilterExclude';
import toFilterInclude from './tricks/toFilterInclude';
import renderResultData from './render/renderResultData';
export let fitSet = {};

const convertSet = (set) => {
  const rawSet = set.data,
    rules = set.condition,
    primeArr = [];
  let sortSet;
  for (const key in rawSet) {
    primeArr.push(rawSet[key]);
  }

  for (let item in rules) {
    if (item === 'sort_by') {
      sortSet = toSortSet(primeArr, rules[item][0]);
    }
  }

  for (let item in rules) {
    if (item === 'exclude') {
      for (let val in rules[item]) {
        let [arg] = Object.entries(rules[item][val]);
        sortSet = toFilterExclude(primeArr, arg);
      }
    }
  }

  for (let item in rules) {
    if (item === 'include') {
      for (let val in rules[item]) {
        let [arg] = Object.entries(rules[item][val]);
        sortSet = toFilterInclude(primeArr, arg);
      }
    }
  }

  fitSet.result = [...sortSet];
  renderResultData(fitSet);
};

export default convertSet;
