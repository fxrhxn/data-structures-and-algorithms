

function add(x, y) {
   if solutions[x][y] exists then
      return solutions[x][y]
   solutions[x][y] = solutions[y][x] = x + y // Sum is commutative
   return solutions[x][y]
}
add(2, 3)
// Executes the operation because there's no result for that parameter combination
add(2, 3)
// Now it just simply uses direct access to return the solution calculated on the previous call.
