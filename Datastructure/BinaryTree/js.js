let tree;

function Node(n) {
  this.value = n;
  this.count = 1;
  this.left = null;
  this.right = null;
  this.increment = 150
}

Node.prototype.addNode = function(n, parentX, parentY) {
  textSize(32);
  fill(0, 102, 153);
  stroke(0, 102, 153);
  textAlign(CENTER);
  if (n.value > this.value) {
    let incValX = parentX + this.increment;
    let incValY = parentY + this.increment;
    if (this.right === null) {
      this.right = n
      ellipse(incValX, incValY - 10, 50, 50)
      line(parentX, parentY, incValX, incValY)
      fill('whtie');
      text(n.value, incValX, incValY);
    } else {
      this.right.addNode(n, parentX + this.increment, parentY + this.increment)
    }
  } else if (n.value < this.value) {
    let incValX = parentX - this.increment;
    let incValY = parentY + this.increment;
    if (this.left === null) {
      this.left = n
      ellipse(incValX, incValY - 10, 50, 50);
      line(parentX, parentY, incValX, incValY);
      fill('whtie');
      text(n.value, incValX, incValY);
    } else {
      this.left.addNode(n, parentX - this.increment, parentY + this.increment)
    }
  } else if (n.value === this.value) {
    this.count += 1
  }
}

Node.prototype.visit = function() {
  if (this.left !== null) {
    this.left.visit()
  }
  console.log(this.value)
  if (this.right !== null) {
    this.right.visit()
  }
}

function Tree() {
  this.root = null;
}

Tree.prototype.addValue = function(n) {
  if (this.root === null) {
    this.root = n
    textAlign(CENTER);
    textSize(32);
    fill(0, 102, 153);
    ellipse(width / 2 - 50, 100 - 10, 50, 50);
    fill('white');
    text(n.value, width / 2 - 50, 100)
  } else {
    this.root.addNode(n, width / 2 - 50, 100 - 20)
  }
}

Tree.prototype.sortedVal = function() {
  this.root.visit();
}


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(220);
  tree = new Tree();

  [...Array(7).keys()].forEach(item => {
    tree.addValue(new Node(Math.floor(Math.random() * 50)), item)
  })

  //   tree.sortedVal()

}

function draw() {

}