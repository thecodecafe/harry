module.exports = basket => {
  // Groups. E.g. { <Number>TitleNumber: <Number>TitleQuantity }
  const groups = {};
  // loop through and add title and update its groups
  for (let i = 0; i < basket.length; i++) {
    groups[basket[i]] = groups[basket[i]]
      ? groups[basket[i]] + 1
      : 1;
  }
  // return groups for books in basket
  return Object.values(groups);
}