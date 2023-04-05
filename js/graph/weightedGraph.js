class WeightedGraph{
    constructor(){
        this.adjacencyList = {};

    }
    addVertex(vertex){
        if(!this.adjecencyList[vertex] ) this.adjecencyList[vertex] = [];
    }
}