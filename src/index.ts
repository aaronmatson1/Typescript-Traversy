// Basic Types

let id: number = 5;
let company: string = 'Matson Media'
let isPublished: boolean = true;
let x: any = 'hello'

let ids:number[] = [1,2,3,4,5,6,7,8,9]

let arr: any[] = [1, true, 'Hello']

// Tuple
let person: [number, string, boolean] = [1, 'Aaron', true]
// Tuple array
let employee: [number, string][]

employee = [
    [1, "Aaron"],
    [2, "Marc"],
    [3, "Chad"]
]


//Union
let pid: string | number = 22

console.log('ID: ',id);
console.log('IDS', ids);
console.log('PID', pid);


//Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

console.log('Direction 1', Direction1.Up);
console.log('Direction 2', Direction2.Left);

//Objects
type User = {
    id: number,
    name:string
}


const user = {
    id: 1,
    name: 'John'
}
console.log('User', user);

//Type Assertion
let cid: any = 1;
// let customerID = <number>cid
let customerID = cid as number


//Functions
function addNum(x: number, y:number): number{
    return x + y
}

console.log('x + y = ', addNum(1,2));

function log(message: string | number): void {
    console.log('leaving a message', message);
}


//Interfaces
interface UserInterface {
    id: number,
    name:string,
    age?: number
}


const user1: UserInterface = {
    id: 1,
    name: 'John'
    
}

interface MathFunc {
    (x: number, y: number): number
}
const add: MathFunc = (x: number, y:number): number => x + y
const sub: MathFunc = (x: number, y:number): number => x - y
console.log('User', user);
interface PersonInterface {
    id: number,
    name:string,
    register(): string
}

// Classes
class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const brad = new Person(1, 'Brad Melon')
const mike = new Person(2, 'Mike Jordan')

//Subclass
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string){
        super(id, name)
        this.position = position
    }
}

console.log(brad.register());
console.log(mike.register());

const emp =  new Employee(3, 'shawn', 'developer')
console.log('Employee ', emp.register());


//Generics (reusable components)
function getArray<T>(items: T[]): T[] { //adding a generic as a placeholder until we define the type later on in the code
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4]) //defining the type 'number' here
let stringArray = getArray<string>(['brad', 'john', 'jill'])

numArray.push('hello')
stringArray.push('hello')