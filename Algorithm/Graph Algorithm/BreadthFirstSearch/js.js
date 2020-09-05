let data = {
    "movies": [{
            "title": "Diner",
            "cast": [
                "Steve Guttenberg",
                "Daniel Stern",
                "Mickey Rourke",
                "Kevin Bacon",
                "Tim Daly",
                "Ellen Barkin",
                "Paul Reiser",
                "Kathryn Dowling",
                "Michael Tucker",
                "Jessica James",
                "Colette Blonigan",
                "Kelle Kipp",
                "Clement Fowler",
                "Claudia Cron"
            ]
        },
        {
            "title": "Footloose",
            "cast": [
                "Kevin Bacon",
                "Lori Singer",
                "Dianne Wiest",
                "John Lithgow",
                "Sarah Jessica Parker",
                "Chris Penn",
                "Frances Lee McCain",
                "Jim Youngs",
                "John Laughlin",
                "Lynne Marta",
                "Douglas Dirkson"
            ]
        },
        {
            "title": "Flatliners",
            "cast": [
                "Kiefer Sutherland",
                "Julia Roberts",
                "Kevin Bacon",
                "William Baldwin",
                "Oliver Platt",
                "Kimberly Scott",
                "Joshua Rudoy",
                "Benjamin Mouton",
                "Hope Davis",
                "Patricia Belcher",
                "Beth Grant"
            ]
        },
        {
            "title": "Eat Pray Love",
            "cast": [
                "Julia Roberts",
                "Javier Bardem",
                "Billy Crudup",
                "Richard Jenkins",
                "Viola Davis",
                "James Franco",
                "Sophie Thompson",
                "Mike O 'Malley",
                "Christine Hakim",
                "Arlene Tur",
                "Hadi Subiyanto",
                "Gita Reddy",
                "Tuva Novotny",
                "Luca Argentero",
                "Rushita Singh"
            ]
        },
        {
            "title": "Spotlight",
            "cast": [
                "Mark Ruffalo",
                "Michael Keaton",
                "Rachel McAdams",
                "Liev Schreiber",
                "John Slattery",
                "Brian d'Arcy James",
                "Stanley Tucci",
                "Gene Amoroso",
                "Jamey Sheridan",
                "Billy Crudup",
                "Maureen Keiller",
                "Richard Jenkins",
                "Paul Guilfoyle",
                "Len Cariou",
                "Neal Huff",
                "Michael Cyril Creighton",
                "Laurie Heineman",
                "Tim Progosh"
            ]
        }
    ]
}
let graph;


function setup(){
    noCanvas();
    graph = new Graph();
    data.movies.forEach(item => {
        let movie = item.title;
        let cast = item.cast;
        let movieNode = new Node(movie);
        graph.addNode(movieNode);

        item.cast.forEach(item => {
            let actorNode = graph.getActor(item);
            if(actorNode === undefined) {
                actorNode = new Node(item)
            }
            graph.addNode(actorNode)
            movieNode.addEdge(actorNode)
        })
    })
    console.log(graph)
}


function draw(){}


class Node{
    constructor(value) {
        this.value = value;
        this.edges = [];
        this.searched = false;
        this.parent = null;
    }

    addEdge(node){
        this.edges.push(node);
        node.edges.push(this);
    }
}


class Graph{
    constructor() {
        this.node = [];
        this.graphs = {};
    }

    addNode(n){
        this.node.push(n);
        this.graphs[n.value] = n;
    }

    getActor(actorName){
        return this.graphs[actorName]
    }
}
