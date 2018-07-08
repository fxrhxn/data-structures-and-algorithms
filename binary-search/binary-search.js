/*
 * Binary search in JavaScript.
 * Returns the index of of the element in a sorted array or (-n-1) where n is the insertion point for the new element.
 * Parameters:
 *     ar - A sorted array
 *     el - An element to search for
 *     compare_fn - A comparator function. The function takes two arguments: (a, b) and returns:
 *        a negative number  if a is less than b;
 *        0 if a is equal to b;
 *        a positive number of a is greater than b.
 * The array may contain duplicate elements. If there are more than one equal elements in the array,
 * the returned value can be the index of any one of the equal elements.
 */
function binarySearch(ar, el, compare_fn) {
    var m = 0;
    var n = ar.length - 1;
    while (m <= n) {
        var k = (n + m) >> 1;
        var cmp = compare_fn(el, ar[k]);
        if (cmp > 0) {
            m = k + 1;
        } else if(cmp < 0) {
            n = k - 1;
        } else {
            return k;
        }
    }
    return -m - 1;
}

function compare_number(a, b) {
  return a - b;
}

var ar = [1, 2, 2, 2, 5, 9, 11, 12, 12, 12, 12, 15, 20, 20, 20, 25, 40, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 80];

console.log(binarySearch(ar, 1, compare_number))


// new function test() {
//   var ar = [1, 2, 2, 2, 5, 9, 11, 12, 12, 12, 12, 15, 20, 20, 20, 25, 40, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 80];
//   for(var i = 0; i <= 100; i++) {
//   	 var n = binarySearch(ar, i, compare_number);
//      document.body.appendChild(document.createTextNode("binarySearch("+i+") = "+n));
//      if((n >= 0 && ar[n] !== i) ||
//         (n < 0 && ((-n-1) < ar.length && ar[-n-1] <= i)) ||
//         (n < 0 && (-n-2 >= 0 && ar[-n-2] >= i))) {
//      		document.body.appendChild(document.createTextNode(" //fail"));
//      }
//      else {
//      		document.body.appendChild(document.createTextNode(" //correct"));
//      }
//      document.body.appendChild(document.createElement("br"));
//   }
// }();
