class Graph{
    constructor(){
        this.adjecencyList = {};
    }
    addVertex(vertex){
        if(!this.adjecencyList[vertex] ) this.adjecencyList[vertex] = [];
    }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
console.log(g)