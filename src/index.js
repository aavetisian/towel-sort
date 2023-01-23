
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix ? matrix.flatMap((m, i) => i % 2 ? m.reverse() : m) : []
}
  

// console.log(towelSort( [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ],
// ]));