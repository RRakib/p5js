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
let path = [];


function setup(){
    createCanvas(window.innerWidth, window.innerHeight)
    graph = new Graph();
    data.movies.forEach((item, index) => {
        let movie = item.title;
        let cast = item.cast;
        let movieNode = new Node(movie);
        movieNode.setMovie();
        movieNode.setYPos(random(height));
        movieNode.setXPos(random(width))
        graph.addNode(movieNode);

        item.cast.forEach(item => {
            let actorNode = graph.getActor(item);
            if(actorNode === undefined) {
                actorNode = new Node(item)
            }
            graph.addNode(actorNode)
            movieNode.addEdge(actorNode)
            actorNode.setYPos(random(height));
            actorNode.setXPos(random(width))
        })
    })
    
    let start = graph.startNode("Mike O 'Malley");
    let end = graph.endNode('Kevin Bacon');

    let queue = [];
    start.searched = true;
    queue.push(start);

    while(queue.length > 0){
        let current = queue.shift();
        if(current === end) {
            console.log('Found ' + current.value);
            break;
        }
        current.edges.forEach(item => {
            if(!item.searched){
                item.searched = true;
                item.parent = current;
                queue.push(item)
            }
        })
    }

    let p = '';
    path.unshift(end);
    let next = end.parent;
    while(next !== null){
        path.unshift(next);
        next = next.parent
    }

    console.log(graph)
}



function draw(){
    background('white')
    graph.node.forEach((item, index) => {
        push()
        if(item.isMovie){
            fill('#ccc')
            stroke('#ccc')
            circle(item.xPos,  item.yPos, 80);
            item.edges.forEach((items, index) => {
                circle(items.xPos, items.yPos, 20)
                line(items.xPos, items.yPos, item.xPos, item.yPos)
            })
        }
        pop()
    })
    path.forEach((item, index) => {
        push()
        fill('red')
        stroke('red')
        strokeWeight(3)
        circle(item.xPos, item.yPos, item.isMovie ? 80 : 20);
        line(item.xPos, item.yPos, path[index + 1].xPos, path[index + 1].yPos)
        pop()
    })
}



class Node{
    constructor(value) {
        this.value = value;
        this.edges = [];
        this.searched = false;
        this.parent = null;
        this.isMovie = false;
        this.yPos = null;
        this.xPos = null;
    }

    addEdge(node){
        this.edges.push(node);
        node.edges.push(this);
    }

    setMovie(){
        this.isMovie = true
    }

    setYPos(y){
        this.yPos = y
    }

    setXPos(x){
        this.xPos = x
    }
}



class Graph{
    constructor() {
        this.node = [];
        this.graphs = {};
        this.start = null;
        this.end = null;
    }

    startNode(start){
        return this.graphs[start]
    }

    endNode(end){
        return this.graphs[end]
    }

    addNode(n){
        this.node.push(n);
        this.graphs[n.value] = n;
    }

    getActor(actorName){
        return this.graphs[actorName]
    }
}
