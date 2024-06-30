// po dwukropku definiujemy typ zmiennej
let userName: string;

userName = 34; // This assignment is incorrect: number is not assignable to type string
userName = "Joe";

let userAge = 34;
let isValid = true;

// w tym przypadku zarowno abc1 jak 123 powinno byc dozwolone
// Use string | number to indicate the type can be either string or number
let userID: string | number = "abc1";
userID = 123;

// ===== Object Types =====

// definiowanie typu object
let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

user = {
  name: "Joe",
  age: 34,
  isAdmin: true,
  id: "abc", // This can also be a number, e.g., 123
};

// ===== Array Types =====

let hobbies: Array<string>;
// <typ> tutaj oznacza jakiego typu wartosci przechowuje array
// Alternatively, you can use string[] for the same effect

hobbies = ["Sports", "Cooking", "Reading"];

// ===== Adding Types to Function Parameters =====

// (): - void, poniewaz funkcja nic nie zwraca
function add(a: number, b: number): void {
  const result = a + b;
  console.log(result);
}

// (): - tutaj ustawiamy typ wartosci zwrotnej
function substract(a: number, b: number): number {
  return a - b;
}

// ===== Defining Function Types =====

// definicja typu funkcji to ()=>
function calculate(
  a: number,
  b: number,
  calcFn: (a: number, b: number) => number
) {
  calcFn(a, b);
}

calculate(5, 2, substract);

// ===== Custom Type Aliases =====

type SubstractFn = (a: number, b: number) => number; // tworzenie nowego typu

// Now, calcFn is of a function type, which is clearer with the predefined type
function calculate2(a: number, b: number, calcFn: SubstractFn) {
  calcFn(a, b);
}

type StringOrNum = string | number;
let userID2: StringOrNum;

// ===== Interfaces =====
// interface sluzy do definiowania typow dla obiektu

interface User{
    name: string;
    age: number;
    isAdmin: boolean;
    id: string | number;
  };

interface Credentials{
    password: string;
    email: string;
}

let creds: Credentials;
creds = {password: "abc123", email: "john.doe@gmail.com"}

// tutaj interface zmusza do zdefiniowania wlasciwosci i metod
// ktore sa zdefiniowanie w objekcie Credentials 

class AuthCredentials implements Credentials {
    email: string;
    password: string;
    username: string; // mozna dodawac dodatkowe, jesli wszystkie z Credentials sa zdefiniowane
}

function login(credentials: Credentials){}

login(creds) // egzekucja funkcji moze byc z argumentem w postaci obiektu creds
login(new AuthCredentials()) // albo nowa instancja klasy AuthCrdentials


// ===== Merging =====
type Admin = {
    permissions: string[]
}

type AppUser = {
    username: string;
}

// merge dwoch typow przy uzyciu &
type AppAdmin = Admin & AppUser // kombinacja dwoch typow


// mozna tez laczyc ze soba interface'y
interface Admin1{
    permissions: string[]
}

interface AppUser1{
    username: string;
}

// merge dwoch interfejsow przy uzyciu extends
interface AppAdmin1 extends Admin1, AppUser1 {}



// ===== Literal types =====

let role: "admin" | "user" | "editor"


// ===== Type guards =====
type Role = "admin" | "user" | "editor"

function performAction(action: string | number, role: Role){
    // sprawdzamy jaka rola przez if i dla kazdej roli wykonujemy jakas akcje
    if(role === "admin" && typeof action === "string") {
        // ...
    }
    if(role === 'editor'){
        // ...
    }
}


// ===== Generic Types =====

// generic typy pracuja razem z jakims innym typem
// generic Array potrzebuje informacji jakie wartosci powinny byc w array
// dajemu informacje ze wartosci w array powinny byc typu Role
let roles: Array<Role>
roles = ["admin", "editor", "user"]

// custom generic type
type DataStorage<T> = { // T to placeholder jakiegos typu
    storage: T[] // storage bedzie arrayem wartosci, ktorych typu nie znam
    add: (data: T) => void;
}

const textStorage: DataStorage<string> = {
    storage: [], // storage bedzie arrayem stringow
    add(data) {
        this.storage.push(data)
    } // add bedzie przyjmowac wartosc typu string
}

const userStorage: DataStorage<User> = {
    storage: [], // storage bedzie arrayem wartosciami typu User
    add(User){}
}

// generic function
function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b
  }
}
 
// const newUser = merge<{name: string}, {age: number}>(
//   {name: "Joe"}, 
//   {age: 30}
// );

const newUser = merge(
  {name: "Joe"}, 
  {age: 30}
);

newUser.name

