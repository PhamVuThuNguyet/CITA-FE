
export const convertArrayToObject = (array, key = 'name') => {

  return array.reduce((pre, cur) => {
    const yearRegex = /.*_\d{4}$/g
    const newKey = key === 'name' && yearRegex.test([cur[key]]) ? cur[key].replace(/_\d{4}$/, "") : cur[key];
    return ({ ...pre, [newKey]: cur })
  }, {})
};