# TypeScript Concepts Demonstration

This project demonstrates **core and advanced TypeScript concepts** through practical examples.
It includes topics ranging from **basic types to advanced features like generics, utility types, classes, interfaces, and API handling with Axios**.

The goal of this file is to help developers understand how TypeScript improves **type safety, readability, and maintainability** in JavaScript applications.

---

# 📚 Topics Covered

The file demonstrates the following TypeScript concepts:

### 1. Type Inference

TypeScript automatically detects the type of variables based on assigned values.

Example:

```
let favoriteDrink = "water";
```

TypeScript infers this as a **string**.

---

### 2. Type Annotations

Explicitly defining variable or function types.

Example:

```
function greetUser(userName: string): string {
  return `Hello, ${userName}!`;
}
```

---

### 3. Basic Types

Common primitive types in TypeScript.

- boolean
- number
- string

Example:

```
let isUserActive: boolean = true;
let userAge: number = 22;
let userName: string = "Vaishnavi";
```

---

### 4. Arrays

Two ways to define arrays in TypeScript.

```
let numbers: number[] = [1,2,3]
let fruits: Array<string> = ["apple","banana"]
```

---

### 5. Object Types

Objects can be typed using inline type definitions.

```
let userProfile: { name: string; age: number }
```

---

### 6. Any Type

Allows any value type but should be avoided because it removes type safety.

```
let randomData: any
```

---

### 7. Unknown Type

Safer alternative to `any`.

```
let value: unknown
```

Type checking is required before using it.

---

### 8. Void Type

Used when a function **does not return any value**.

```
function printGreeting(): void {
  console.log("Hello")
}
```

---

### 9. Null and Undefined

Used to represent absence of value.

```
let nullValue: null = null
let undefinedValue: undefined = undefined
```

---

### 10. Union Types

A variable can store multiple types.

```
let userId: number | string
```

Literal unions:

```
let status: "pending" | "success" | "error"
```

---

### 11. Tuples

Fixed length arrays with fixed types.

```
let user: [string, number]
```

---

### 12. Enums

Enums allow defining named constants.

```
enum Direction {
  Up,
  Down,
  Left,
  Right
}
```

---

### 13. Never Type

Represents functions that **never return**.

Example: throwing errors.

---

### 14. Type Assertion

Used to tell TypeScript the exact type.

```
let length = (value as string).length
```

---

### 15. Type Narrowing

Refining types using checks like `typeof`.

---

### 16. Exhaustive Checking

Ensures all possible cases are handled.

---

### 17. Type Guards

Used to determine a variable type at runtime.

---

### 18. User Defined Type Guards

Custom type checking functions.

Example:

```
function isString(value: unknown): value is string
```

---

### 19. Type Alias

Reusable custom types.

```
type User = {
 name: string
 age: number
}
```

---

### 20. Optional Properties

Properties that are not required.

```
price?: number
```

---

### 21. Readonly Properties

Prevent modification after assignment.

```
readonly brand: string
```

---

### 22. Function Types

Functions can also have types.

```
let add: (a:number,b:number)=>number
```

---

### 23. Object Types

Typing objects with specific properties.

---

### 24. Structural Typing (Duck Typing)

TypeScript checks **structure instead of type name**.

---

### 25. Utility Types

Built-in helper types.

| Utility Type  | Purpose                    |
| ------------- | -------------------------- |
| `Partial<T>`  | Makes properties optional  |
| `Required<T>` | Makes properties required  |
| `Pick<T>`     | Select specific properties |
| `Omit<T>`     | Remove specific properties |

---

### 26. Functions Basics

Basic function typing and return types.

---

### 27. Arrays and Tuples

Understanding typed arrays and tuples.

---

### 28. Readonly Arrays

Arrays that cannot be modified.

---

### 29. Classes in TypeScript

Example:

```
class Person {
  name: string

  constructor(name: string){
    this.name = name
  }
}
```

---

### 30. Access Modifiers

TypeScript supports:

- `public`
- `private`
- `protected`

These control visibility of class properties.

---

### 31. Getters and Setters

Encapsulation for class properties.

---

### 32. Static Members

Used for methods shared across all instances.

---

### 33. Abstract Classes

Classes that **cannot be instantiated directly**.

---

### 34. Interfaces

Used to define object structures.

Example:

```
interface User {
 name: string
 age: number
}
```

---

### 35. Generics

Generics allow reusable components that work with **multiple data types**.

Example:

```
function identity<T>(value:T):T
```

---

### 36. Multiple Generics

Functions can accept more than one generic type.

```
function pair<T,U>(first:T, second:U)
```

---

### 37. Generic Interfaces

Interfaces can also support generics.

---

### 38. Index Signatures

Allows objects with dynamic keys.

```
interface Dictionary {
 [key:string]: string
}
```

---

### 39. Interface Merging

Multiple interfaces with same name combine automatically.

---

### 40. Axios with TypeScript

Axios can be used with typed responses.

Example:

```
axios.get<Post[]>("api")
```

---

### 41. Error Handling with Axios

Type-safe error handling using:

```
axios.isAxiosError(error)
```

---

### 42. Import Type Syntax

```
import type { AxiosResponse } from "axios"
```

Ensures **only types are imported**, reducing bundle size.

---

# 🛠 Technologies Used

- TypeScript
- Axios
- Node / Browser Console

---

## ▶️ How to Run the TypeScript File

Follow these steps to compile and run the TypeScript code.

### 1️⃣ Install Dependencies

If the project uses Axios or other libraries:

```
npm install
```

Install Axios if not installed:

```
npm install axios
```

---

### 2️⃣ Compile the TypeScript Code

Use the TypeScript compiler:

```
npx tsc
```

This command compiles all `.ts` files into JavaScript files based on the configuration in `tsconfig.json`.

---

### 3️⃣ Run the Compiled JavaScript

After compilation, run the generated JavaScript file:

```
node dist/index.js
```

---

### 📌 Alternative

If TypeScript is installed globally, you can also run:

```
tsc
node dist/index.js
```

---

### ⚙️ How It Works

1. `tsc` compiles TypeScript (`.ts`) files into JavaScript (`.js`)
2. The compiled files are usually placed inside the **dist** folder.
3. `node dist/index.js` executes the compiled JavaScript file.

---

# 🎯 Learning Outcome

By exploring this file, you will understand:

- Core TypeScript syntax
- Type safety in JavaScript
- Advanced TypeScript patterns
- Working with APIs using typed responses
- Object-oriented programming in TypeScript
- Generics and utility types

---

# 👩‍💻 Author

Vaishnavi Mali

---
