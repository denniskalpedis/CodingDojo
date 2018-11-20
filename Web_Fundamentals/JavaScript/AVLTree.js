function AVLTree() {
    this.head = null;
    this.size = 0;
    this.isBalanced = function() {

    };
    this.add = function(value) {
        
        this.balance = this._add(value, this.head);
        this.size++;

    };
    this._add = function(value, runner){
        if(!this.head){
            console.log("added to head");
            this.head = new AVLNode(value);
            return;
            
        }
        // if(runner == null){
        //     console.log("added!");
        //     return new AVLNode(value);
        // }
        if(value > runner.val){
            if(runner.right == null){
                runner.right = new AVLNode(value);
            }
            // runner.right = this._add(value, runner.right);
        } else if (value < runner.val){
            if(runner.left == null){
                runner.left = new AVLNode(value);
            }
            // runner.left = this._add(value, runner);
        } else {
            console.log("already in list!");
            this.size--;
            return;
        }
        if(runner.right && !runner.left){
            return -1;
        } else if(!runner.right && runner.left){
            return 1;
        } else {
            return 0;
        }
    }
    this.remove = function(value) {

    };
    this.height = function(value) {

    };
}

function AVLNode(value) {
    this.val = value;
    this.balance = 0;
    this.left = null;
    this.right = null;
    this.isBalanced = function() {

    };
    this.height = function(value) {

    };
}

var tree = new AVLTree();
tree.add(4);
tree.add(4);
tree.add(6);
tree.add(7);
tree.add(8);
tree.add(9);
tree.add(10);
tree.add(11);
tree.add(12);
tree.add(13);
tree.add(14);
tree.add(4);
tree.add(4);
tree.add(4);
// tree.add(6);

console.log(tree.head.val);
console.log(tree.size);