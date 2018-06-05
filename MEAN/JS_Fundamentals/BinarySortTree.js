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
console.log(starting.contains(5));
console.log(starting.min());
console.log("size is " + starting.bigsize());