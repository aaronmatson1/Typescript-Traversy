"use strict";
let id = 5;
let company = 'Matson Media';
let isPublished = true;
let x = 'hello';
let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr = [1, true, 'Hello'];
let person = [1, 'Aaron', true];
let employee;
employee = [
    [1, "Aaron"],
    [2, "Marc"],
    [3, "Chad"]
];
let pid = 22;
console.log('ID: ', id);
console.log('IDS', ids);
console.log('PID', pid);
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log('Direction 1', Direction1.Up);
console.log('Direction 2', Direction2.Left);
const user = {
    id: 1,
    name: 'John'
};
console.log('User', user);
let cid = 1;
let customerID = cid;
function addNum(x, y) {
    return x + y;
}
console.log('x + y = ', addNum(1, 2));
function log(message) {
    console.log('leaving a message', message);
}
const user1 = {
    id: 1,
    name: 'John'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log('User', user);
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Brad Melon');
const mike = new Person(2, 'Mike Jordan');
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
console.log(brad.register());
console.log(mike.register());
const emp = new Employee(3, 'shawn', 'developer');
console.log('Employee ', emp.register());
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let stringArray = getArray(['brad', 'john', 'jill']);
numArray.push('hello');
stringArray.push('hello');
//# sourceMappingURL=index.js.map