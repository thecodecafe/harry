module.exports = (items, size = 2) => {
  // result container
  const res = [];
  // copy items
  const itemsCopy = Array().concat(JSON.parse(JSON.stringify(items)));
  // add items to result
  while (itemsCopy.length > 0) {
    res.push(itemsCopy.splice(0, size));
  }
  // return result
  return res;
}