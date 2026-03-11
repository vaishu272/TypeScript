import axios from "axios";

// ==============================
// 1. TYPE INFERENCE
// ==============================
// TypeScript automatically detects the type

let favoriteDrink = "water";
// inferred as string

console.log("TYPE INFERENCE ", `I like to drink ${favoriteDrink}.`);

// ==============================
// 2. TYPE ANNOTATIONS
// ==============================
// We explicitly define the type

function greetUser(userName: string): string {
  // userName → parameter type
  // : string → return type
  return `Hello, ${userName}!`;
}

const currentUserName: string = "Vaishnavi";

console.log("TYPE ANNOTATIONS ", greetUser(currentUserName));

// ==============================
// 3. BASIC TYPES
// ==============================

let isUserActive: boolean = true;
let userAge: number = 22;
let userFirstName: string = "Vaishnavi";

console.log(
  "BASIC TYPES: boolean, number, string ",
  `Active: ${isUserActive}, Name: ${userFirstName}, Age: ${userAge}`,
);

// ==============================
// 4. ARRAYS
// ==============================

// Array of numbers
let numberList: number[] = [1, 2, 3, 4];

// Array using generic syntax
let fruitList: Array<string> = ["apple", "banana"];

console.log("ARRAYS ", numberList);
console.log("ARRAYS ", fruitList);

// ==============================
// 5. OBJECT TYPE
// ==============================

let userProfile: { name: string; age: number } = {
  name: "Vaishnavi",
  age: 22,
};

console.log("OBJECT TYPE ", userProfile);

// ==============================
// 6. ANY TYPE
// ==============================
// Accepts any value (not recommended)

let randomData: any = "Hello";

randomData = 10;
randomData = true;

console.log("ANY TYPE ", randomData);

// ==============================
// 7. UNKNOWN TYPE
// ==============================
// Safer than any and requires type checking before usage

let unknownValue: unknown = "Hello";

if (typeof unknownValue === "string") {
  console.log("UNKNOWN TYPE ", unknownValue.toUpperCase());
}

// ==============================
// 8. VOID TYPE
// ==============================
// Function does not return anything

function printGreeting(): void {
  console.log("VOID TYPE ", "Hello from TypeScript");
}

printGreeting();

// ==============================
// 9. NULL & UNDEFINED TYPES
// undefined is default value for uninitialized variables, null is assigned explicitly to indicate no value
// ==============================

let nullValue: null = null;
let undefinedValue: undefined = undefined;

console.log("NULL & UNDEFINED TYPES ", nullValue, undefinedValue);

// ==============================
// 10. UNION TYPES
// ==============================
// Variable can store multiple types

let userId: number | string;

userId = 101;
userId = "A101";

console.log("UNION TYPES ", userId);

// Literal union type

let apiRequestStatus: "pending" | "success" | "error" = "pending";

console.log("Literal UNION TYPES ", apiRequestStatus);

// ==============================
// 11. TUPLES
// ==============================
// Fixed type + fixed order

let userDetailsTuple: [string, number] = ["Vaishnavi", 22];
// userDetailsTuple = [22, "Vaishnavi"]; // invalid

console.log("TUPLES ", userDetailsTuple);

// ==============================
// 12. ENUMS: Enumerations is a way to define a set of named constants, making code more readable and maintainable.
// ==============================

enum NavigationDirection {
  Up,
  Down,
  Left,
  Right,
}

console.log("ENUMS ", NavigationDirection.Up);

// ==============================
// 13. NEVER TYPE
// ==============================
// Function never returns

function throwError(message: string): never {
  throw new Error(message);
}
try {
  throwError("This is an error!");
} catch (error) {
  console.error("NEVER TYPE ", error);
}

// ==============================
// 14. TYPE ASSERTION
// ==============================
// Tell TypeScript the exact type

let unknownText: unknown = "TypeScript";

let textLength: number = (unknownText as string).length;
// another way: let textLength: number = (<string>unknownText).length;

console.log("TYPE ASSERTION ", textLength);

// Dom Manipulation with Type Assertions
// const inputTy = document.getElementById("input") as HTMLInputElement;
// inputTy.addEventListener("input", (event) => {
//   const target = event.target as HTMLInputElement;
//   console.log(`User typed: ${target.value}`);
// });

// ==============================
// 15. TYPE NARROWING
// ==============================

function displayId(idValue: number | string) {
  if (typeof idValue === "number") {
    console.log("TYPE NARROWING ", idValue.toFixed(2));
  } else {
    console.log("TYPE NARROWING ", idValue.toUpperCase());
  }
}

displayId(10);
displayId("ABC");

// ==============================
// 16. EXHAUSTIVE CHECK
// ==============================

type ShapeType = "circle" | "square";

function calculateShape(shape: ShapeType) {
  switch (shape) {
    case "circle":
      console.log("EXHAUSTIVE CHECK ", "Handling circle shape");
      break;

    case "square":
      console.log("EXHAUSTIVE CHECK ", "Handling square shape");
      break;

    default:
      const exhaustiveCheck: never = shape;
      return exhaustiveCheck;
  }
}
calculateShape("circle");
calculateShape("square");

// ==============================
// 17. TYPE GUARDS
// ==============================

function printFormattedValue(value: string | number) {
  if (typeof value === "string") {
    console.log("TYPE GUARDS ", value.toUpperCase());
  } else {
    console.log("TYPE GUARDS ", value.toFixed(2));
  }
}

printFormattedValue("hello");
printFormattedValue(100);

// ==============================
// 18. USER DEFINED TYPE GUARD names with "is" and return type is a type predicate (e.g., value is string)
// ==============================

function isString(value: unknown): value is string {
  return typeof value === "string";
}
let userinput: unknown = "Hello, TypeScript!";
if (isString(userinput)) {
  console.log("USER DEFINED TYPE GUARD ", `Input is a string: ${userinput}`);
} else {
  console.log("USER DEFINED TYPE GUARD ", "Input is not a string.");
}

// ==============================
// 19. TYPE ALIAS
// ==============================
// Custom reusable type

type UserType = {
  name: string;
  age: number;
};

const loggedInUser: UserType = {
  name: "Vaishnavi",
  age: 22,
};

const anotherUser: UserType = {
  name: "John",
  age: 30,
};

console.log("TYPE ALIAS ", loggedInUser);
console.log("TYPE ALIAS ", anotherUser);

// Interface
interface SizeInterface {
  size: "medium" | "large";
}
class SizeClass implements SizeInterface {
  size: "medium" | "large" = "medium";
}
const newSize = new SizeClass();
console.log("TYPE ALIAS of Interface ", newSize.size);

// ==============================
// 20. OPTIONAL PROPERTIES
// ==============================

type ProductType = {
  name: string;
  price?: number;
};

const laptopProduct: ProductType = {
  name: "Laptop",
};

console.log("OPTIONAL PROPERTIES ", laptopProduct);

// ==============================
// 21. READONLY PROPERTIES
// ==============================

type CarType = {
  readonly brand: string;
};

const myCarInfo: CarType = {
  brand: "Toyota",
};
console.log("READONLY PROPERTIES ", myCarInfo.brand);

// myCarInfo.brand = "BMW" ❌ not allowed

// ==============================
// 22. FUNCTION TYPES
// ==============================

let addNumbers: (a: number, b: number) => number;

addNumbers = (num1, num2) => num1 + num2;

console.log("FUNCTION TYPES ", addNumbers(2, 3));

// ==============================
// 23. OBJECTS IN TYPESCRIPT
// ==============================

type Employee = {
  name: string;
  role: string;
};

const employee1: Employee = {
  name: "Vaishnavi",
  role: "Developer",
};

console.log("OBJECTS IN TYPESCRIPT ", employee1);

// ==============================
// 24. DUCK TYPING / STRUCTURAL TYPING
// ==============================
// If two objects have the same structure, they are considered the same type

type PersonType = {
  name: string;
};

function printPerson(person: PersonType) {
  console.log("DUCK TYPING ", person.name);
}

const student = { name: "John", age: 20 };

printPerson(student); // allowed because structure matches

// ==============================
// 25. PARTIAL<T> UTILITY TYPE
// ==============================
// Makes all properties optional

type UserProfile = {
  name: string;
  age: number;
};

type PartialUser = Partial<UserProfile>;

const updatedUser: PartialUser = {
  age: 25,
};

console.log("PARTIAL<T> ", updatedUser);

// ==============================
// 26. REQUIRED<T> UTILITY TYPE
// ==============================
// Makes all properties required

type OptionalUser = {
  name?: string;
  age?: number;
};

type RequiredUser = Required<OptionalUser>;

const requiredUser: RequiredUser = {
  name: "Vaishnavi",
  age: 22,
};

console.log("REQUIRED<T> ", requiredUser);

// ==============================
// 27. PICK<T> UTILITY TYPE
// ==============================
// Select specific properties

type Chair = {
  material: string;
  color: string;
  legs: number;
};

type PickChair = Pick<Chair, "material" | "color">;

const myChair: PickChair = {
  material: "wood",
  color: "brown",
};
console.log("PICK<T> ", myChair);

// ==============================
// 28. OMIT<T> UTILITY TYPE
// ==============================
// Remove specific properties

type chairWithoutLegs = Omit<Chair, "legs">;

const chairWithoutLegs: chairWithoutLegs = {
  material: "plastic",
  color: "red",
};
console.log("OMIT<T> ", chairWithoutLegs);

// ==============================
// 29. FUNCTIONS BASICS
// ==============================

function multiply(a: number, b: number): number {
  return a * b;
}

console.log("FUNCTION BASICS ", multiply(4, 5));

// ==============================
// 30. OPTIONAL PARAMETERS IN FUNCTIONS
// ==============================

function greet(name: string, city?: string) {
  if (city) {
    console.log("OPTIONAL PARAMETER ", `Hello ${name} from ${city}`);
  } else {
    console.log("OPTIONAL PARAMETER ", `Hello ${name}`);
  }
}

greet("Vaishnavi");
greet("Vaishnavi", "Ahmedabad");

// ==============================
// 31. ARRAYS BASICS
// ==============================

let scores: number[] = [10, 20, 30];
let fruits: Array<string> = ["apple", "banana", "orange"];

scores.push(40);

console.log("ARRAY BASICS for scores ", scores);
console.log("ARRAY BASICS for fruits ", fruits);

// ==============================
// 32. ARRAYS Tuples
// ==============================

type UserTuple = [string, number];

const userInfo: UserTuple = ["Vaishnavi", 22];
// userInfo = [22, "Vaishnavi"] ❌ not allowed because order matters in tuples
console.log("ARRAY TUPLES ", userInfo);

// Named tuple
type ProductTuple = [name: string, price: number];

const productInfo: ProductTuple = ["Laptop", 999.99];
console.log("NAMED TUPLE ", productInfo);

// ==============================
// 33. READONLY ARRAYS
// ==============================
// Array cannot be modified

const readonlyNumbers: readonly number[] = [1, 2, 3];

console.log("READONLY ARRAY ", readonlyNumbers);

// readonlyNumbers.push(4) ❌ not allowed

// ==============================
// 34. CLASSES INTRODUCTION
// ==============================

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log("CLASSES INTRODUCTION ", `Hello, my name is ${this.name}`);
  }
}

const person1 = new Person("Vaishnavi");
person1.greet();

// ==============================
// 35. CONSTRUCTORS
// ==============================

class Car {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }
}

const car1 = new Car("Toyota");

console.log("CONSTRUCTORS ", car1.brand);

// ==============================
// 36. ACCESS MODIFIERS (PUBLIC, PRIVATE)
// ==============================

class BankAccount {
  public owner: string;
  private balance: number;

  constructor(owner: string, balance: number) {
    this.owner = owner;
    this.balance = balance;
  }

  showBalance() {
    console.log("ACCESS MODIFIER PRIVATE ", this.balance);
  }
}

const account = new BankAccount("Vaishnavi", 5000);

console.log("ACCESS MODIFIER PUBLIC ", account.owner);
account.showBalance();
// console.log(account.balance) ❌ not allowed (private)

// ==============================
// 37. PROTECTED MODIFIER
// ==============================

class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  bark() {
    console.log("PROTECTED MODIFIER ", `${this.name} is barking`);
  }
}

const dog = new Dog("Rocky");
dog.bark();

// ==============================
// 38. GETTERS AND SETTERS
// ==============================

class UserAccount {
  private _password: string = "";

  set password(newPassword: string) {
    this._password = newPassword;
  }

  get password() {
    return this._password;
  }
}

const userAcc = new UserAccount();

userAcc.password = "12345";

console.log("GETTERS AND SETTERS ", userAcc.password);

// ==============================
// 39. STATIC MEMBERS
// ==============================

class MathUtils {
  static add(a: number, b: number) {
    return a + b;
  }
}

console.log("STATIC MEMBERS ", MathUtils.add(5, 10));

// ==============================
// 40. ABSTRACT CLASSES
// ==============================

abstract class Shape {
  abstract area(): number;
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(5);

console.log("ABSTRACT CLASS ", circle.area());

// ==============================
// 41. INTERFACES & GENERICS INTRO
// ==============================

interface UserInterface {
  name: string;
  age: number;
  numberOfFriends?: number; // optional property
}
const userInterfaceExample: UserInterface = {
  name: "Vaishnavi",
  age: 22,
};
console.log("INTERFACE ", userInterfaceExample);

interface Box<T> {
  value: T;
}

const stringBox: Box<string> = {
  value: "Hello",
};

console.log("INTERFACE GENERIC ", stringBox);

// ==============================
// 43. INDEX SIGNATURES
// ==============================

interface StringDictionary {
  [key: string]: string;
}

const userRoles: StringDictionary = {
  admin: "Vaishnavi",
  user: "John",
};

console.log("INDEX SIGNATURE for user roles in string dictionary: ", userRoles);

interface NumberDictionary {
  [key: string]: number;
}
const productPrices: NumberDictionary = {
  laptop: 999.99,
  phone: 499.99,
};

console.log(
  "INDEX SIGNATURE for product prices in number dictionary: ",
  productPrices,
);

// ==============================
// 44. INTERFACE MERGING
// ==============================

interface UserInfo {
  name: string;
}

interface UserInfo {
  age: number;
}

const mergedUser: UserInfo = {
  name: "Vaishnavi",
  age: 22,
};

console.log("INTERFACE MERGING ", mergedUser);

// ==============================
// 45. GENERICS BASICS (<T>)
// ==============================
// Generics allow reusable components that work with different data types

function identityGeneric<T>(value: T): T {
  return value;
}

console.log(
  "GENERICS BASICS ",
  identityGeneric<string>("Hello TypeScript"),
  " and Numbers can be passed:",
  identityGeneric<number>(100),
);

// ==============================
// 46. MULTIPLE GENERIC TYPES
// ==============================
// A function can accept multiple generic types and we also use partial, required, pick, omit utility types with generics

function pairValues<T, U>(first: T, second: U) {
  return { first, second };
}

const pairResult = pairValues<string, number>("Age", 22);

console.log("MULTIPLE GENERICS ", pairResult);

// ==============================
// 47. GENERIC INTERFACES
// ==============================
// Interfaces can also use generics

interface ApiResponse<T> {
  data: T;
  status: number;
}

const userResponse: ApiResponse<{ name: string; age: number }> = {
  data: {
    name: "Vaishnavi",
    age: 22,
  },
  status: 200,
};

console.log("GENERIC INTERFACE ", userResponse);

// ==============================
// 49. INSTALLING LIBRARIES & TYPES (AXIOS)
// ==============================
// When using libraries in TypeScript, sometimes we also install type definitions

// Example installation commands (run in terminal)
// npm install axios
// npm install --save-dev @types/axios

console.log("\nINSTALLING LIBRARIES ", "Axios installed with type definitions");

// ==============================
// 50. HANDLING AXIOS ERRORS SAFELY
// ==============================

type Post = {
  id: number;
  title: string;
  body: string;
};

async function fetchDataWithErrorHandling() {
  try {
    const response = await axios.get<Post[]>(
      "https://jsonplaceholder.typicode.com/posts",
    );

    console.log("AXIOS SUCCESS ", response.data.length);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("AXIOS ERROR ", error.message);
    } else {
      console.log("UNKNOWN ERROR ", error);
    }
  }
}

fetchDataWithErrorHandling();

// ==============================
// 51. FETCHING DATA WITH TYPES
// ==============================

// async function fetchPosts(): Promise<Post[]> {
//   const response = await axios.get<Post[]>(
//     "https://jsonplaceholder.typicode.com/posts",
//   );

//   return response.data;
// }

// fetchPosts().then((posts) => {
//   console.log("FETCHING DATA WITH TYPES ", posts.slice(0, 2));
// });

// ==============================
// 52. IMPORT TYPE SYNTAX
// ==============================
// import type ensures that only types are imported and removed from final JS build

import type { AxiosResponse } from "axios";

type UserResponse = AxiosResponse<Post[]>;

console.log("IMPORT TYPE SYNTAX ", "AxiosResponse type imported successfully");
