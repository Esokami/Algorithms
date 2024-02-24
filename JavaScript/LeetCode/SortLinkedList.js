/**
 * Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    insert(num){
        let new_node = new Node(num);

        //If list is empty, set new node as head and tail
        if(!this.head){
            this.head = new_node;
            this.tail = new_node;
        }
        //Otherwise set head node to next node of new node. Then set new node as head
        else{
            new_node.next = this.head;
            this.head = new_node;
        }
    }

    sortList(){
        let current_node = this.head;
        let position = null;
        var temp = 0;

        //If list is empty, return
        if(!this.head){
            return;
        }
        else{
            //Iterate through list
            while(current_node != null){
                //Get next node
                position = current_node.next;
                while(position != null){
                    //If current node value is greater than next node value
                    if (current_node.data > position.data){
                        //Place in temp variable
                        temp = current_node.data;
                        //Place greater value as next node value
                        current_node.data = position.data;
                        position.data = temp;
                    }
                    //Go to next position
                    position = position.next;
                }
                current_node = current_node.next;
            }
        }
    }

    print(){
        let runner = this.head;
        //If empty, print that it is empty
        if(!this.head){
            console.log("List empty");
            return;
        }
        //Otherwise print values and iterate through the list
        do {
            console.log(runner.data + " ");
            runner = runner.next;
        } while (runner != null);
    }
}

let sll1 = new SLL();
sll1.insert(4);
sll1.insert(6);
sll1.insert(2);
sll1.insert(1);
sll1.insert(7);
sll1.sortList();
sll1.print();
