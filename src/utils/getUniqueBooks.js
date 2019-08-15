module.exports = cart => {
  // result container
  const res = [];
  // copy books being bought
  const books = Array().concat(JSON.parse(JSON.stringify(cart)));
  // get total of books being bought
  let remaining = books.length ? books.reduce((sum = 0, num) => sum + num) : 0;
  // sort books in decending order
  books.sort((a, b) => (b < a) ? -1 : (b > a) ? 1 : 0);
  // highest quantity is first item
  let highest = books[0];
  // loop while highest item
  while (highest < remaining) {
    // add each book to the numbe rof 
    for (let i = 0; i < books.length; i++) {
      if (books[i] < 1) continue;
      res.push(1);
      books[i]--;
    }
    // get new highest
    highest = books[0]
    // get remainter
    remaining = books.reduce((total = 0, item) => total + item);
  }
  // dd highest if is greater than zero
  if (highest > 0) res.push(highest);
  // return the unique books res
  return res;
};
