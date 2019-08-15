const getUniqueBooks = require('./utils/getUniqueBooks');
const arrayChunk = require('./utils/arrayChunk');
const titleQuantities = require('./utils/titleQuantities');
const discounts = [1, 0.95, 0.90, 0.80, 0.75];

/**
 * Calculates the lowest possible total cost
 * for the books in the basket, applying the
 * dicount for each set of unique books.
 * 
 * @param {array} basket 
 */
module.exports = basket => {
  let res;

  // group titles and get array of title quantities
  const qtyPerBook = titleQuantities(basket);

  // get the list of unique books sets
  const uniqueBooks = getUniqueBooks(qtyPerBook);

  // get the total number of books in basket
  let totalBooks = qtyPerBook.filter(item => item > 0).length;

  // set loop limit
  let loopLimit = totalBooks > 1 ? 1 : 0;

  // get best discounted total price
  while (totalBooks > loopLimit) {
    /**
     * Chunk unique books by the number of books
     * bought, while excluding remainder book with
     * highest quantity
     */
    const chunkedBooks = arrayChunk(uniqueBooks.filter(i => i === 1), totalBooks);

    // loop through chunked books
    const total = getTotal(chunkedBooks);

    // set new result
    res = !res || total < res ? total : res;

    // reduce chunk size
    totalBooks--;
  }

  // only if more than one copy of any title is in the nasket
  if (qtyPerBook.reduce((prod, item) => prod * item, 1) > 1) {
    /**
     * calculate the total number of times a person is
     * buying n copies of different titles.
     */
    let occurences = qtyPerBook.reduce((occ, item) => {
      occ[item] = occ[item] ? occ[item] + 1 : 1;
      return occ;
    }, {});

    // new chunks container
    let chunksByQtyOccurence = [];

    // copy the unique books array to avoid mutation
    let uniqueBooksCopy = Array().concat(
      JSON.parse(JSON.stringify(uniqueBooks.filter(i => i === 1)))
    );

    // Grab chunks of the unique books by quantity occurencies.
    for (let key in occurences) {
      // get occurence items
      const occurenceItems = uniqueBooksCopy.
        splice(0, Number(key) * occurences[key]);
      // chunk occurence items by occurence size
      chunksByQtyOccurence = chunksByQtyOccurence.concat(
        arrayChunk(occurenceItems, Number(key))
      );
    }

    /**
     * If total gotten from the chunks of unique items is lower
     * set it as the ne result.
     */
    res = getTotal(chunksByQtyOccurence) < res 
      ? getTotal(chunksByQtyOccurence) 
      : res;
  }

  /**
   * Add remainder of book with highest quantity.
   * E.g. [1, 1, 1, 1, 2, 2]. will have a remainder
   * of 2 for title 1 when we get the unique set of books.
   */
  if (uniqueBooks[uniqueBooks.length - 1] > 1) {
    res = res + (uniqueBooks[uniqueBooks.length - 1] * 8);
  }

  // return a result
  return res ? res : 0;
};


/**
 * This will taked the chunks of book sets, sum them up, apply
 * the discount on them, and return the value of that calculation.
 * @param {array} chunksOfBookSets 
 */
const getTotal = chunksOfBookSets => chunksOfBookSets.map(books => {
  // get the sum of total quantity of all books
  const sumOfItems = books.reduce((sum = 0, qty) => sum + qty);
  // add all the items in the section and apply discount, then add to sum
  return 8 * sumOfItems * discounts[books.length - 1];
}).reduce((sum = 0, item) => sum + item, 0);