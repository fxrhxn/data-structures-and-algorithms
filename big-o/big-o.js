
// Constant time algo - o(1)

// On this order, regardless of the complexity (number of items), the time (iterations) is constant.

//You will see this on algorithms that returns an element in an already known position of an array, regardless kind or length.

const getLast = items => items[items.length-1];


// Linear-Time Algorithm
// O(N) — “Order N”

const findIndex = (items, match) => {
  for (let i = 0, total = items.length; i < total; i++)
    if (items[i] == match)
      return i;
   return -1;
};


//Quadratic-Time Algorithm
// O(N 2 ) — “Order N squared”
const buildSquareMatrix = items => {
  let matrix = [];
  for (let i = 0, total = items.length; i < total; i++){
    matrix[i] = [];
    for (let j = 0, total = items.length; j < total; j++)
      matrix[i].push(items[j]);
  }
  return matrix;
};



//Logarithmic-Time Algorithm
//O(log n) — “Order log N”

const quickSort = list => {
  if (list.length < 2)
    return list;
  let pivot = list[0];
  let left  = [];
  let right = [];
  for (let i = 1, total = list.length; i < total; i++){
    if (list[i] < pivot)
      left.push(list[i]);
    else
      right.push(list[i]);
  }
  return [
    ...quickSort(left),
    pivot, 
    ...quickSort(right)
  ];
};
