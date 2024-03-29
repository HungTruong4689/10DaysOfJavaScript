class Graph{
    constructor(){
        this.adjecencyList = {};
    }
    addVertex(vertex){
        if(!this.adjecencyList[vertex] ) this.adjecencyList[vertex] = [];
    }
    addEdge(v1,v2){
        this.adjecencyList[v1].push(v2);
        this.adjecencyList[v2].push(v1);
    }
    removeEdge(vertex1,vertex2){
        this.adjecencyList[vertex1] = this.adjecencyList[vertex1].filter(v => v !== vertex2);
        this.adjecencyList[vertex2] = this.adjecencyList[vertex2].filter(v => v !== vertex1);
    }
    removeVertex(vertex){
        while(this.adjecencyList[vertex].length){
            const adjecencyVertex = this.adjecencyList[vertex].pop();
            this.removeEdge(vertex,adjecencyVertex);
        }
        delete this.adjecencyList[vertex];
    }
    depthFirstRecursive(start){
        const result = [];
        const visited = {};
        const adjecencyList = this.adjecencyList;

        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjecencyList[vertex].forEach(neighbor => {
                if(!this.visited[neighbor]){
                    return dfs(neighbor);
                }
            });
        })(start)
        return result;
    }
    depthFirstIterative(start){
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjecencyList[currentVertex].forEach(neighbor =>{
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                }
            })
        }

        return result;
    }
    breadthFirst(start){
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true

        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjecencyList[currentVertex].slice().reverse().forEach(neighbor =>{
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        return result;
    }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
console.log(g)