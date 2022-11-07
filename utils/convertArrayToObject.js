export const convertArrayToObject = (array, key = 'name') => {
  return array.reduce((pre, cur) => {
    return ({ ...pre, [cur[key]]: cur })
  }, {})
};