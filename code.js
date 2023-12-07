function dijkstra(graph, sourceNode) {
    // check for empty graph
    if(graph.length < 1) {
        return [];
    }

    let dist = [];
    let visited = [];
    // intializing dist to Infinty
    // and visited to false
    for (node in graph) {
        dist[node] = Infinity;
        visited[node] = false;
    }
    // source to 0
    dist[sourceNode] = 0;

    for (i in visited) {
        let min = Infinity;
        let index = -1;
        let temp = 0;

        // loop through the positions in the adjacency matrix to find
        // the minimum path to the next node
        for (node in graph) {
            if (visited[node] == false && dist[node] <= min) {
                min = dist[node];
                index = node;
            }
        }

        // mark as visited
        visited[index] = true;

        // put the minimum distance in the array
        for (v in graph) {
            // check if en edge exists and it's not been visited
            if (graph[index][v] > 0 && visited[v] == false) {
                temp = dist[index] + graph[index][v];
                // check if it's less then what is currently there
                if(temp < dist[v]) {
                    dist[v] = temp;
                }
            }
        }
    }

    return dist;
}
