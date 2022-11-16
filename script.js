
// var demo1 = "yes";
// var demo2 = "shadik";
// var demo = demo1 + " "  +demo2;
// document.getElementById("name").innerHTML= demo;


// 1. Declare a Integer Array
document.write("1. Declare a Integer Array" + '<br>')
const abc = [ 1,2,3,4,5]
console.log(abc);
alert(abc)+'<br>';
document.write(abc+'<br>');

//2. Print Sum of all elements in Array


const Array = [25,50,75,100,125,150,175,200];

let numAfterSumofElement = 0;

for(let i =0; i<Array.length;i++){
    numAfterSumofElement +=Array[i]
}

console.log(numAfterSumofElement);
alert(numAfterSumofElement)

//3. Declare a Linked List with 5 to 10 data

const linkedList1 = {
    data: 100
}

const linkedList2 = {
    data: 200
}
const linkedList3 = {
    data: 300
}
const linkedList4 = {
    data: 400
}
const linkedList5 = {
    data: 500
}

linkedList1.next = linkedList2;
linkedList2.next = linkedList3;
linkedList3.next = linkedList4;
linkedList4.next = linkedList5;
console.log(linkedList1)
alert(linkedList1 )

//4. Reverse the list with Stack

// const list = new LinkedList()
// console.log('list is empty' , list.isEmpty);
// console.log('list size' , list.getSize());


// list.insert()

function reverse(list){
    let stack = [];
    for(let i=0;i<list.length;i++){
        stack.push(list[i]);
    }
    let reverseList='';
    while(stack.length>0){
        reverseList += stack.pop();
    }
    return reverseList;

}

reverse("'s','i','d','d','h','i','k'");
console.log(reverse("'s','i','d','d','h','i','k'"));


   


//5. Pass the even index elements into Queue

 

var number = 11;
for(var i=1 ; i<number;i++){
    if(i%2===0){
        document.write(i+"is  Even number<br>");
    }
    
}

// 6.Create a Map and Pass the odd index elements in Map

 


const arr = [1,2,3,4,5,6,7,8,9]
const odds = arr.filter(number =>{
    return number % 2 !== 0;
});

console.log(odds);


// 7.Print Map, stack, queue, Linked List

// MAP

const array=[1,2,3,4,5];
const map1 = array.map(x => x);

console.log(map1)

// STACK

class Stack{
    constructor()
    {
        this.items = [];
         
    }

    add(element){
        return this.items.push(element);
    }
    
}

let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(4);
stack.add(8);
stack.add(16);
stack.add(32);
stack.add(64);
stack.add(128);

console.log(stack.items)

//  QUEUE

class Queue{
    constructor(){
        this.items = [];
    }
    enqueue(element){
        return this.items.push(element);
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.items)

// LinkedList
// Already printed in task no 2  


// 8.Check the expression is valid or not using Stack
 
const balancedPar = function(pars){
    const stack=[];
    for(let single of pars){
        if(single == '('){
            stack.push(single);
        }
        if(single == ')'){
            if(stack.length==0){
                return false;
            }
            stack.pop();
        }
    }
    return stack.length==0;
}

console.log(
    balancedPar('( ((x=y) ) 4 ()(')
)