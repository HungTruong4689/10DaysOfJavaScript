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
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
console.log(g)