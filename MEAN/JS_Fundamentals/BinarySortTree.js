function bst() {
    this.root = null;
    this.bigsize = function () {
        current = this.root;
        count = 0;
        count = size(count, current);

        function size(num, current) {
            if (current == null) {
                return num;
            } else {
                num++;
                num += size(0, current.left);
                num += size(0, current.right);
                return num;
            }

        }
        return count;
    };
    this.add = function (val) {
        if (this.root == null) {
            this.root = new Node(val);
            return;
        }
        current = this.root;
        while (true) {
            if (current.value <= val) {
                if (current.right != null) {
                    current = current.right;
                } else {
                    current.right = new Node(val);
                    return;
                }
            } else if (current.value > val) {
                if (current.left != null) {
                    current = current.left;
                } else {
                    current.left = new Node(val);
                    return;
                }
            }
        }
    };
    this.min = function () {
        current = this.root;
        while (true) {
            if (current.left != null) {
                current = current.left;
            } else {
                return current.value;
            }
        }
    };
    this.contains = function (val) {
        current = this.root;
        while (current) {
            if (current.value == val) {
                return true;
            }
            if (current.value > val) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    };
    this.height = function(){
        current = this.root;
        var count = 0;
        var longest = 0;
        length(count, current);
        function length(num, current){
            if(current == null){
                if (longest < num){
                    longest = num;
                    return num;
                }else{
                    return;
                }
            } else {
                num++;
                length(num, current.left);
                length(num, current.right);
            }
        }
        return longest;
    };
    this.arrtoBST = function(arr){
        arr.sort(function(a,b){return a - b});
        mid = ((Math.floor(arr.length / 2)) - 1);
        this.add(arr[mid]);
        console.log(arr[mid]);
        for(let i = 1; i <= (mid + 1); i++){
            if(arr[mid+i] != undefined){
                this.add(arr[mid+i]);
                console.log(arr[mid+i]);
            }
            if(arr[mid-i] != undefined){
                this.add(arr[mid-i]);
                console.log(arr[mid-i]);
            }
        }
        console.log(arr);
        console.log("made BST!");
        return;
    };
    this.isBalanced = function(){
        current = this.root;
        console.log(current.value);
        var count = 0;
        var longest = [];
        length(count, current);
        function length(num, current){
            num++;
            // console.log(current.value);
            // console.log(current.left);
            // console.log(current.right);
            // console.log(num);
            if(current == null){
                return;
            }
            if(current.left == null && current.right == null){
                console.log(longest);
                longest.push(num);
                console.log(current.value);
                console.log(num);
                console.log(current.left);
                console.log(current.right);
                return;
            }else{
                console.log(current.value);
                console.log(num);
                length(num, current.left);
                length(num, current.right);
            }
        }
        console.log(longest);
    };
}
function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

var starting = new bst();
starting.add(10);
starting.add(8);
starting.add(38);
starting.add(5);
starting.add(1);
starting.add(21);
starting.add(23);
starting.add(42);
starting.add(4);
starting.add(12);
starting.add(3);
starting.add(2);
console.log(starting.contains(5));
console.log(starting.min());
console.log(starting.height());
console.log("size is " + starting.bigsize());
var newBST = new bst();
newBST.arrtoBST([4,23,73,12,5,1,35,684,93,34,13,72,24,69,65,56]);
console.log("size is " + newBST.bigsize());
newBST.isBalanced();