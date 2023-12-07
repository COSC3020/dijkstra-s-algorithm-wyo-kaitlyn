const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

let graph = [ [0, 0, 0, 1],
              [0, 0, 4, 5],
              [1, 0, 0, 0],
              [2, 3, 0, 0] ];

// had to graph out the results on a piece of paper!
assert(JSON.stringify(dijkstra(graph, 0)) == JSON.stringify([0, 4, 8, 1]));
assert(JSON.stringify(dijkstra(graph, 1)) == JSON.stringify([5, 0, 4, 5]));
assert(JSON.stringify(dijkstra([], 0)) == JSON.stringify([]));
assert(JSON.stringify(dijkstra([0], 0)) == JSON.stringify([0]));

let graph2 = [ [0, 0, 1],
              [0, 0, 0],
              [0, 0, 0] ];

assert(JSON.stringify(dijkstra(graph2, 0)) == JSON.stringify([0, Infinity, 1]));