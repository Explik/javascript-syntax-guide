# JavaScript syntax guide 

## Lecture-by-lecture breakdown 

Lecture 1
- `function f() { }` - Global function declaration 
- `let variable` - Global/local variable declaration
- `variable = new_value` - Reassignment of value
- `variable.memberMethod()` - Call to void object method
- `value = variable.memberMethod()` - Call to non-void object method 
- `floatValue = parseFloat(stringValue)` - String to float conversion 

Lecture 3
- `if(condition) { }` - If statement 
- `if(condition) { } else { }` - If/else statement 
- `switch(variable) { case value: ...; break; }` - Switch statement incl. case  
- `switch(variable) { default: ...; break; }` - Switch statement incl. default case 
- `a < b` - Simple boolean expressions 
- `(a < b) && (b < c)` - Complex boolean expressions 

Lecture 5 & 6
- `while() { }` - While loop 
- `do {} while();` - Do-while loop 
- `for() { }` - For loop
- `let array = []` - Array initialization
- `let array = new Array()` - Array initialization
- `let value = array[index]` - Array element reading
- `array[index] = value` - Array element assignment
- `array.length` - Array length
- `array.push(value)` - Array extension
- `array[array.length] = value` - Array extension
- `array.splice(index, numberOfElements)` - Array element deletion
- `array.forEach(callback)` - Array iteration
- `alert(message)` - Display alert message

Lecture 7
- `return value` - Return value from function
- `let value = f(x)` - Assign return value from function to variable

Lecture 8 & 9
- `class ClassName { }` - Class declaration
- `constructor (parameter1, parameter2) { }` - Constructor declaration
- `get PropertyName() { }` - Getter declaration
- `set PropertyName(value) { }` - Setter declaration
- `method(parameter1, parameter2) { }` - Method declaration
- `new ClassName(parameter1, parameter2)` - Object instantiation
- `isNaN` - Check if a value is not a number
- `new Date()` - Get current date
- `new Date(stringValue)` - Parse date from string
- `new Date(year, month, day)` - Create date object from components
- `new Data().toLocaleDateString()` - Formatting date value
- `stringValue.split(separator)` - Split string into array

## Notation 
TODO write section

## Expression/statement syntax
### Variable declaration
```JS
// Unitialized variable declaration
let VARIABLE_NAME_LABEL;

// Initialized variable declaration
let VARIABLE_NAME_LABEL = INITIAL_VALUE_LABEL;

// Constant variable declaration
const VARIABLE_NAME_LABEL = INITIAL_VALUE_LABEL;
```

Breakdown: 
- VARIABLE_NAME_LABEL: This is the name of the variable, which will be used to access the underlying value.
- INITIAL_VALUE_LABEL: This is the initial value assigned to the variable. For non-const variables, the value can be reassigned later. For const variables, the value cannot be reassigned ever.

Examples: 
```JS
// VARIABLE_NAME_LABEL is variable and no initial value is given
let variable;
console.log(variable); // prints undefined (or nothing)
```

```JS	
// VARIABLE_NAME_LABEL is result
// INITIAL_VALUE_LABEL is the result of 5 * 5 + 3
let result = 5 * 5 + 3;
console.log(result); // prints "28"
```

```JS
// VARIABLE_NAME_LABEL is result
// INITIAL_VALUE_LABEL is the result of 3 * (3 + 2)
const result = 3 * (3 + 2);
console.log(result); // prints "15"
```

### Variable reassigment
```JS
// Reassignment of uninitialized variable
let VARIABLE_NAME_LABEL; 
VARIABLE_NAME_LABEL = NEW_VALUE_LABEL;

// Reassignment of initialized variable
let VARIABLE_NAME_LABEL = INITIAL_VALUE_LABEL; 
VARIABLE_NAME_LABEL = NEW_VALUE_LABEL;
```

Breakdown:
- VARIABLE_NAME_LABEL: This is the name of the variable, which will be used to access/manipulate the underlying value.
- INITIAL_VALUE_LABEL: This is the initial value assigned to the variable.
- NEW_VALUE_LABEL: This is the new value assigned to the variable.

Examples: 
```JS
// Declare the variable
// No initial value is given
// VARIABLE_NAME_LABEL is result
let result;
console.log(result); // prints undefined (or nothing)

// Reassign the variable
// VARIABLE_NAME_LABEL is result
// NEW_VALUE_LABEL is the result of 5 * 4
result = 5 * 4;
console.log(result); // prints "20"
```

```JS
// Declare the variable
// VARIABLE_NAME_LABEL is message
// INITIAL_VALUE_LABEL is "hello world" 
let message = "hello world";
console.log(message); // prints "hello world"

// Reassign the variable
// VARIABLE_NAME_LABEL is message
// NEW_VALUE_LABEL is "hello world again"
message = "hello world again";
console.log(message); // prints "hello world again"
```

### Object property reading 
```JS
let object = ELIPSIS_LABEL;
let value = object.PROPERTY_NAME_LABEL;
```

Breakdown:
- PROPERTY_NAME_LABEL: This is the name of the object property whose value is being read.

Examples: 
```JS
let error = createError(); 

// PROPERTY_NAME_LABEL is type
let errorType = error.type;

// PROPERTY_NAME_LABEL is message
let errorMessage = object.message;

console.log(errorType);
console.log(errorMessage);
```

```JS
let error = createError();

// PROPERTY_NAME_LABEL is type
console.log(error.type);

// PROPERTY_NAME_LABEL is message
console.log(error.message);
```

### Object property assignment 
```JS
let object = ELIPSIS_LABEL;
object.PROPERTY_NAME_LABEL = NEW_VALUE_LABEL;
```

Breakdown: 
- PROPERTY_NAME_LABEL: This is the name of the object property whose value is being assigned.
- NEW_VALUE_LABEL: This is the new value assigned to the object property.

Examples: 
```JS
let error = createError();

// PROPERTY_NAME_LABEL is type
// NEW_VALUE_LABEL is "error"
error.type = "Unidentied error";

// PROPERTY_NAME_LABEL is message
// NEW_VALUE_LABEL is "An error occurred"
error.message = "An error occurred";
```

### Object method call 
```JS
let object = ELIPSIS_LABEL;
object.METHOD_NAME_LABEL_1();
object.METHOD_NAME_LABEL_2(ARGUMENT_LABEL_1, ARGUMENT_LABEL_2, ARGUMENT_LABEL_N);
```

Breakdown:
- METHOD_NAME_LABEL_1, METHOD_NAME_LABEL_2: These are the names of the object functions/methods being called.
- ARGUMENT_LABEL_1, ARGUMENT_LABEL_2, etc.: These are the arguments passed to the method.

Examples: 
```JS
let input = createInput(); 

// The argumentless call "input.value()" returns the current value of the input element
// METHOD_NAME_LABEL_1 is value
let inputValue = input.value(); 

// The call "input.value('new value')" sets the value of the input element to 'new value'
// METHOD_NAME_LABEL_2 is value
// ARGUMENT_LABEL_1 is 'new value'
input.value('new value');
```

See function syntax section for more details.

### Array variable declaration 
```JS
// Empty array declaration
let array = [];

// Array declaration with elements
let array = [VALUE_LABEL_0, VALUE_LABEL_1, VALUE_LABEL_N];
```

Breakdown:
- VALUE_LABEL_0, VALUE_LABEL_1, etc.: These are the elements of the array.

Examples: 
```JS
// Empty array declaration
let emptyArray = [];
```

```JS
// Array declaration with elements
// VALUE_LABEL_0 is 1, VALUE_LABEL_1 is 2, VALUE_LABEL_2 is 3
let array = [1, 2, 3];
```

### Array element reading 
```JS
let array = [VALUE_LABEL_0, VALUE_LABEL_1, VALUE_LABEL_N];
let value = array[INDEX_VALUE_LABEL];
```

Breakdown:
- VALUE_LABEL_0, VALUE_LABEL_1, etc.: These are the elements of the array.
- INDEX_VALUE_LABEL: This is the index of the array element whose value is being read.

Examples: 
```JS
let emptyArray = [];

// INDEX_VALUE_LABEL is 0
let firstElement = emptyArray[0];

console.log(firstElement); // prints undefined (or nothing)
```

```JS
// VALUE_LABEL_0 is 1, VALUE_LABEL_1 is 2, VALUE_LABEL_2 is 3
let array = [1, 2, 3];

// INDEX_VALUE_LABEL is 1
let secondElement = array[1];

console.log(secondElement); // prints "2"
```

### Array element assignment 
```JS
let array = [VALUE_LABEL_0, VALUE_LABEL_1, VALUE_LABEL_N];
array[INDEX_VALUE_LABEL] = NEW_VALUE_LABEL;
```

Breakdown: 
- VALUE_LABEL_0, VALUE_LABEL_1, etc.: These are the elements of the array.
- INDEX_VALUE_LABEL: This is the index of the array element whose value is being assigned.
- NEW_VALUE_LABEL: This is the new value assigned to the array element.

Examples: 
```JS
// VALUE_LABEL_0 is 1, VALUE_LABEL_1 is 2, VALUE_LABEL_2 is 3
let array = [1, 2, 3];
console.log(array); // prints "[1, 2, 3]"

// INDEX_VALUE_LABEL is 0
// NEW_VALUE_LABEL is 5
array[0] = 5;

console.log(array); // prints "[5, 2, 3]"
```

### Array extension 
```JS
// Adding a new element to end of array with array.push(...)
let array = [VALUE_LABEL_0, VALUE_LABEL_1, VALUE_LABEL_N];
array.push(NEW_VALUE_LABEL);

// Adding a new element to the end of the array with array[array.length] = ...
let array = [VALUE_LABEL_0, VALUE_LABEL_1, VALUE_LABEL_N];
array[array.length] = NEW_VALUE_LABEL;
```

Breakdown:
- VALUE_LABEL_0, VALUE_LABEL_1, etc.: These are the elements of the array.
- NEW_VALUE_LABEL: This is the new value added to the array.

Examples: 
```JS
// VALUE_LABEL_0 is 1, VALUE_LABEL_1 is 2, VALUE_LABEL_2 is 3
let array = [1, 2, 3];

// NEW_VALUE_LABEL is 4
array.push(4);

console.log(array); // prints "[1, 2, 3, 4]"
```

```JS
// VALUE_LABEL_0 is 1, VALUE_LABEL_1 is 2, VALUE_LABEL_2 is 3
let array = [1, 2, 3];

// NEW_VALUE_LABEL is 4
array[array.length] = 4;

console.log(array); // prints "[1, 2, 3, 4]"
```

# Function syntax
### Function declaration 
```JS
function FUNCTION_NAME_LABEL() { 
    STATEMENT_LABEL_1;
    STATEMENT_LABEL_2;
    STATEMENT_LABEL_N;
}

function FUNCTION_NAME_LABEL(PARAMETER_LABEL_1, PARAMETER_LABEL_2, PARAMETER_LABEL_N) { 
    STATEMENT_LABEL_1;
    STATEMENT_LABEL_2;
    STATEMENT_LABEL_N;
}
```

Breakdown: 
- FUNCTION_NAME_LABEL: This is the name of the function, which will be used to call the function.
- PARAMETER_LABEL_1, PARAMETER_LABEL_2, etc.: These are the named values passed to the function, which can be used inside the function.

Examples: 
```JS
// FUNCTION_NAME_LABEL is greet
// STATEMENT_LABEL_1 is console.log("Hello, world!");
function greet() {
    console.log("Hello, world!");
}
```

```JS
// FUNCTION_NAME_LABEL is greet
// PARAMETER_LABEL_1 is name
// STATEMENT_LABEL_1 is console.log("Hello, " + name + "!");
function greet(name) {
    console.log("Hello, " + name + "!");
}
```

### Function calls without parameters nor return value
:::columns
```JS
FUNCTION_NAME_LABEL();
ELIPSIS_LABEL
FUNCTION_NAME_LABEL();

function FUNCTION_NAME_LABEL() {
    STATEMENT_LABEL_1;
    STATEMENT_LABEL_2;
    STATEMENT_LABEL_N;
}
```

```Mermaid
flowchart TD
  A[Statement before first function call] ---> C
  C[Evaluate STATEMENT_LABEL_1] --> D
  D[Evaluate STATEMENT_LABEL_2] --> E
  E[Evaluate STATEMENT_LABEL_N] --> F
  F[ELIPSIS_LABEL] --> I
  I[Evaluate STATEMENT_LABEL_1] --> J
  J[Evaluate STATEMENT_LABEL_2] --> K
  K[Evaluate STATEMENT_LABEL_N] --> L
  L[Statement after second function call]

  subgraph "first function call"
    C
    D
    E
  end

  subgraph "second function call"
    I
    J
    K
  end
```
:::

Breakdown:
- FUNCTION_NAME_LABEL: This is the name of the function being called.
- STATEMENT_LABEL_1, STATEMENT_LABEL_2, etc.: These are the statements executed when the function is called.

Examples: 
```JS
// Call the greet function twice
// FUNCTION_NAME_LABEL is greet
greet(); // Prints the first "Hello, world!"
greet(); // Prints the second "Hello, world!"

// Declare the greet function
// FUNCTION_NAME_LABEL is greet
// STATEMENT_LABEL_1 is console.log("Hello, world!");
function greet() {
    console.log("Hello, world!");
}
```

### Function calls with parameters but no return value
:::columns
```JS
FUNCTION_NAME_LABEL(ARGUMENT_LABEL_A1, ARGUMENT_LABEL_A2, ARGUMENT_LABEL_AN);
ELIPSIS_LABEL
FUNCTION_NAME_LABEL(ARGUMENT_LABEL_B1, ARGUMENT_LABEL_B2, ARGUMENT_LABEL_BN);

function FUNCTION_NAME_LABEL(PARAMETER_LABEL_1, PARAMETER_LABEL_2, PARAMETER_LABEL_N) {
    STATEMENT_LABEL_1;
    STATEMENT_LABEL_2;
    STATEMENT_LABEL_N;
};
```

```Mermaid
flowchart TD
  A[Statement before first function call] ---> C0
  C0[PARAMETER_LABEL_1 = ARGUMENT_LABEL_A1\n PARAMETER_LABEL_2 = ARGUMENT_LABEL_A2\n ELIPSIS_LABEL] --> C
  C[Evaluate STATEMENT_LABEL_1] --> D
  D[Evaluate STATEMENT_LABEL_2] --> E
  E[Evaluate STATEMENT_LABEL_N] --> F
  F[ELIPSIS_LABEL] --> I0
  I0[PARAMETER_LABEL_1 = ARGUMENT_LABEL_B1\n PARAMETER_LABEL_2 = ARGUMENT_LABEL_B2\n ELIPSIS_LABEL] --> I
  I[Evaluate STATEMENT_LABEL_1] --> J
  J[Evaluate STATEMENT_LABEL_2] --> K
  K[Evaluate STATEMENT_LABEL_N] --> L
  L[Statement after second function call]

  subgraph "first function call"
    C0
    C
    D
    E
  end

  subgraph "second function call"
    I0
    I
    J
    K
  end
```
:::

Breakdown:
- FUNCTION_NAME_LABEL: This is the name of the function being called.
- ARGUMENT_LABEL_A1, ARGUMENT_LABEL_A2, etc.: These are the values passed to the function on the first function call.
- ARGUMENT_LABEL_B1, ARGUMENT_LABEL_B2, etc.: These are the values passed to the function on the second function call.
- PARAMETER_LABEL_1, PARAMETER_LABEL_2, etc.: These are the names of the values passed to the function, which can be used inside the function. The names remain the same, but the value might change for each function call.
- STATEMENT_LABEL_1, STATEMENT_LABEL_2, etc.: These are the statements executed when the function is called.

Examples: 
```JS
// Call the greet function
// FUNCTION_NAME_LABEL is greet
// ARGUMENT_LABEL_A1 is "Anna"
greet("Anna"); // Prints the first "Hello, Anna!"

// Call the greet function again
// FUNCTION_NAME_LABEL is greet
// ARGUMENT_LABEL_B1 is "Bob"
greet("Bob"); // Prints the second "Hello, Bob!"

// Declare the greet function
// FUNCTION_NAME_LABEL is greet
// PARAMETER_LABEL_1 is name
// STATEMENT_LABEL_1 is console.log("Hello, " + name + "!");
function greet(name) {
    console.log("Hello, " + name + "!");
}
```

### Function calls with return value but no parameters
:::columns
```JS
let value1 = FUNCTION_NAME_LABEL();
let value2 = FUNCTION_NAME_LABEL();

function FUNCTION_NAME_LABEL() {
    STATEMENT_LABEL_1;
    STATEMENT_LABEL_2;
    STATEMENT_LABEL_N;
    return RETURN_VALUE_LABEL;
}
```

```Mermaid
flowchart TD
  A[Statement before first declaration] ---> C
  C[Evaluate STATEMENT_LABEL_1] --> D
  D[Evaluate STATEMENT_LABEL_2] --> E
  E[Evaluate STATEMENT_LABEL_N] --> E2
  E2[Return RETURN_VALUE_LABEL] --> F
  F[let value 1 = RETURN_VALUE_LABEL] --> G  
  G[Evaluate STATEMENT_LABEL_1] --> I
  I[Evaluate STATEMENT_LABEL_2] --> J
  J[Evaluate STATEMENT_LABEL_N] --> J2
  J2[Return RETURN_VALUE_LABEL] --> K
  K[let value 2 = RETURN_VALUE_LABEL] --> L
  L[Statement after second declaration call]

  subgraph "first function call"
    C
    D
    E
    E2
  end

  subgraph "second function call"
    G
    I
    J
    J2
  end
```
:::

Breakdown: 
- FUNCTION_NAME_LABEL: This is the name of the function being called.
- STATEMENT_LABEL_1, STATEMENT_LABEL_2, etc.: These are the statements executed when the function is called.
- RETURN_VALUE_LABEL: This is the value returned by the function.

Examples: 
```JS
// Assign time1 to the result of the getCurrentTime function
// FUNCTION_NAME_LABEL is getCurrentTime
const time1 = getCurrentTime();
console.log("Current time: " + time1); // Prints "Current time: 1:37:12 PM"

// Assign time2 to the result of the getCurrentTime function
// FUNCTION_NAME_LABEL is getCurrentTime
const time2 = getCurrentTime();
console.log("Current time: " + time2); // Prints "Current time: 1:37:13 PM"

// Declare function getCurrentTime
// FUNCTION_NAME_LABEL is getCurrentTime
// STATEMENT_LABEL_1 is const date = new Date();
// STATEMENT_LABEL_2 is return date.toLocaleTimeString();
// RETURN_VALUE_LABEL is the result of new Date().toLocaleTimeString()
function getCurrentTime() {
    const date = new Date(); 
    return date.toLocaleTimeString();
}
```

### Function calls with parameters and return value
:::columns
```JS
let value1 = functionName(ARGUMENT_LABEL_A1, ARGUMENT_LABEL_A2, ARGUMENT_LABEL_AN);
let value2 = functionName(ARGUMENT_LABEL_B1, ARGUMENT_LABEL_B2, ARGUMENT_LABEL_BN);

function functionName(PARAMETER_LABEL_1, PARAMETER_LABEL_2, PARAMETER_LABEL_N) {
    STATEMENT_LABEL_1;
    STATEMENT_LABEL_2;
    STATEMENT_LABEL_N;
    return RETURN_VALUE_LABEL;
};
```

```Mermaid
flowchart TD
  A[Statement before first declaration] ---> C0
  C0[PARAMETER_LABEL_1 = ARGUMENT_LABEL_A1\n PARAMETER_LABEL_2 = ARGUMENT_LABEL_A2\n ELIPSIS_LABEL] --> C
  C[Evaluate STATEMENT_LABEL_1] --> D
  D[Evaluate STATEMENT_LABEL_2] --> E
  E[Evaluate STATEMENT_LABEL_N] --> E2
  E2[Return RETURN_VALUE_LABEL] --> F
  F[let value 1 = RETURN_VALUE_LABEL] --> G  
  G[Evaluate STATEMENT_LABEL_1] --> I0
  I0[PARAMETER_LABEL_1 = ARGUMENT_LABEL_B1\n PARAMETER_LABEL_2 = ARGUMENT_LABEL_B2\n ELIPSIS_LABEL] --> I
  I[Evaluate STATEMENT_LABEL_1] --> J
  J[Evaluate STATEMENT_LABEL_2] --> K
  K[Evaluate STATEMENT_LABEL_N] --> K2
  K2[Return RETURN_VALUE_LABEL] --> L
  L[let value 2 = RETURN_VALUE_LABEL] --> M
  M[Statement after second declaration call]

  subgraph "first function call"
    C0
    C
    D
    E
    E2
  end

  subgraph "second function call"
    G
    I0
    I
    J
    K
    K2
  end
```
:::

Breakdown:
- FUNCTION_NAME_LABEL: This is the name of the function being called.
- ARGUMENT_LABEL_A1, ARGUMENT_LABEL_A2, etc.: These are the values passed to the function on the first function call.
- ARGUMENT_LABEL_B1, ARGUMENT_LABEL_B2, etc.: These are the values passed to the function on the second function call.
- PARAMETER_LABEL_1, PARAMETER_LABEL_2, etc.: These are the names of the values passed to the function, which can be used inside the function. The names remain the same, but the value might change for each function call.
- STATEMENT_LABEL_1, STATEMENT_LABEL_2, etc.: These are the statements executed when the function is called.

Examples: 
```JS
// Assign the result of the sum function to value1
// FUNCTION_NAME_LABEL is sum
// ARGUMENT_LABEL_A1 is 5
// ARGUMENT_LABEL_A2 is 3
const value1 = sum(5, 3);
console.log(value1); // Prints "8"

// Assign the result of the sum function to value2
// FUNCTION_NAME_LABEL is sum
// ARGUMENT_LABEL_B1 is 10
// ARGUMENT_LABEL_B2 is 5
const value2 = sum(10, 5);
console.log(value2); // Prints "15"

// Declare the sum function
// FUNCTION_NAME_LABEL is sum
// PARAMETER_LABEL_1 is a, PARAMETER_LABEL_2 is b
// STATEMENT_LABEL_1 is return a + b;
// RETURN_VALUE_LABEL is the result of a + b
function sum(a, b) {
    return a + b;
}
```

### Function call with early return without value
:::columns
```JS
FUNCTION_NAME_LABEL(ARGUMENT_LABEL_1, ARGUMENT_LABEL_2, ARGUMENT_LABEL_N); 

function FUNCTION_NAME_LABEL(PARAMETER_LABEL_1, PARAMETER_LABEL_2, PARAMETER_LABEL_N) {
    if (CONDITION_LABEL) 
        return;
    
    STATEMENT_LABEL_1;
    STATEMENT_LABEL_2;
    STATEMENT_LABEL_N;
}
```
  
```Mermaid
flowchart TD
  A[Statement before function call] --> B[Evaluate CONDITION_LABEL]
  B -->|false| C[Evaluate STATEMENT_LABEL_1]
  C --> D[Evaluate STATEMENT_LABEL_2]
  D --> E[Evaluate STATEMENT_LABEL_N]
  E --> F[Statement after function call]
  B -->|true| F

  subgraph "function call"
    B
    C
    D
    E
  end
```
::: 

Breakdown: 
- FUNCTION_NAME_LABEL: This is the name of the function being called.
- ARGUMENT_LABEL_1, ARGUMENT_LABEL_2, etc.: These are the values passed to the function.
- PARAMETER_LABEL_1, PARAMETER_LABEL_2, etc.: These are the names of the values passed to the function, which can be used inside the function.
- CONDITION_LABEL: This is the condition that, if met, causes the function to return early.
- STATEMENT_LABEL_1, STATEMENT_LABEL_2, etc.: These are the statements executed when the function is called and the early return condition is not met.

Example: 
```JS
let sizeOutput = createInput();

// Set size to a valid value of 5 
// FUNCTION_NAME_LABEL is setSize
// ARGUMENT_LABEL_A1 is 5
setSize(5);

// Attempt to set size to an invalid value of -1, which will be ignored
// FUNCTION_NAME_LABEL is setSize
// ARGUMENT_LABEL_B1 is -1
setSize(-1);

// FUNCTION_NAME_LABEL is setSize
// PARAMETER_LABEL_1 is size
// CONDITION_LABEL is size < 0
// STATEMENT_LABEL_1 is sizeOutput.value(size);
function setSize(size) {
    if (size < 0) 
        return;
    
    sizeOutput.value(size);
}
```

### Function call with early return with value 
:::columns
```JS
let value = FUNCTION_NAME_LABEL(ARGUMENT_LABEL_1, ARGUMENT_LABEL_2, ARGUMENT_LABEL_N);

function FUNCTION_NAME_LABEL(PARAMETER_LABEL_1, PARAMETER_LABEL_2, PARAMETER_LABEL_N) {
    if (CONDITION_LABEL) 
        return RETURN_VALUE_LABEL_1;
    
    STATEMENT_LABEL_1;
    STATEMENT_LABEL_2;
    STATEMENT_LABEL_N;
    return RETURN_VALUE_LABEL_2;
}
```

```Mermaid
flowchart TD
  A[Statement before declaration] --> A2
  A2[PARAMETER_LABEL_1 = ARGUMENT_LABEL_1\n PARAMETER_LABEL_2 = ARGUMENT_LABEL_2\n ELIPSIS_LABEL] --> B[Evaluate CONDITION_LABEL]
  B -->|false| C[Evaluate STATEMENT_LABEL_1]
  C --> D[Evaluate STATEMENT_LABEL_2]
  D --> E[Evaluate STATEMENT_LABEL_N]
  E --> F[Return RETURN_VALUE_LABEL_2]
  F --> G[let value = RETURN_VALUE_LABEL]
  G --> H[Statement after declaration]
  B --> |true| I[Return RETURN_VALUE_LABEL_1]
  I --> G

  subgraph "function call"
    A2
    B
    C
    D
    E
    F
    I
  end
```
:::

Breakdown:
- FUNCTION_NAME_LABEL: This is the name of the function being called.
- ARGUMENT_LABEL_1, ARGUMENT_LABEL_2, etc.: These are the values passed to the function.
- PARAMETER_LABEL_1, PARAMETER_LABEL_2, etc.: These are the names of the values passed to the function, which can be used inside the function.
- CONDITION_LABEL: This is the condition that, if met, causes the function to return early.
- STATEMENT_LABEL_1, STATEMENT_LABEL_2, etc.: These are the statements executed when the function is called and the early return condition is not met.
- RETURN_VALUE_LABEL_1: This is the value returned when the early return condition is met.
- RETURN_VALUE_LABEL_2: This is the value returned when the early return condition is not met.

Example: 
```JS

// Assign the result of the multiply function to value1
// FUNCTION_NAME_LABEL is multiply
// ARGUMENT_LABEL_A1 is 5
// ARGUMENT_LABEL_A2 is 3
const value 1 = multiply(5, 3);
console.log(value1); // Prints "15"

// Assign the result of the multiply function to value2
// FUNCTION_NAME_LABEL is multiply
// ARGUMENT_LABEL_B1 is 0 (triggers early return)
// ARGUMENT_LABEL_B2 is 3
const value2 = multiply(0, 3);
console.log(value2); // Prints "0"

// Declare the multiply function
// FUNCTION_NAME_LABEL is multiply
// PARAMETER_LABEL_1 is a, PARAMETER_LABEL_2 is b
// CONDITION_LABEL is a === 0 || b === 0
// STATEMENT_LABEL_1 is return 0;
// RETURN_VALUE_LABEL_1 is 0
// STATEMENT_LABEL_2 is return a * b;
// RETURN_VALUE_LABEL_2 is the result of a * b
function multiply(a, b) {
    if (a === 0 || b === 0) 
        return 0;
    
    return a * b;
}
```

## Control structure syntax

###  If statement 
::: columns
```JS
if (CONDITION_LABEL) 
    STATEMENT_LABEL;

if (CONDITION_LABEL) {
    STATEMENT_LABEL_1;
    STATEMENT_LABEL_2;
    STATEMENT_LABEL_N;
}
```

```Mermaid
flowchart TD
  A[Evaluate CONDITION_LABEL] -->|false| B[Statement after if]
  A -->|true| C[Evaluate STATEMENT_LABEL_1]
  C --> D[Evaluate STATEMENT_LABEL_2]
  D --> E[Evaluate STATEMENT_LABEL_N]
  E --> B
```
:::


### If/else statement 
::: columns
```JS
if (CONDITION_LABEL) 
    STATEMENT_LABEL_1;
else 
    STATEMENT_LABEL_2;
```

```Mermaid
flowchart TD
  A0[Statement before if-else statement] --> A[Evaluate CONDITION_LABEL]
  A -->|false| B[Evaluate STATEMENT_LABEL_2]
  A -->|true| C[Evaluate STATEMENT_LABEL_1]
  C --> D[Statement after if-else statement]
  B --> D
```
:::

::: columns
```JS
if (CONDITION_LABEL) {
    STATEMENT_LABEL_A1;
    STATEMENT_LABEL_A2;
    STATEMENT_LABEL_AN;
} else {
    STATEMENT_LABEL_B1;
    STATEMENT_LABEL_B2;
    STATEMENT_LABEL_BN;
}
```
  
```Mermaid
  flowchart TD
    A[Statement before if-else statement] --> B[Evaluate CONDITION_LABEL]
    B -->|true| C[Evaluate STATEMENT_LABEL_A1]
    C --> D[Evaluate STATEMENT_LABEL_A2]
    D --> E[STATEMENT_LABEL_AN]
    E --> F[Statement after if-else statement]
    B -->|false| G[Evaluate STATEMENT_LABEL_B1]
    G --> H[Evaluate STATEMENT_LABEL_B2]
    H --> I[STATEMENT_LABEL_BN]
    I --> F
```
:::

### If/else if/else statement 
```JS
if (CONDITION_LABEL_A) 
    STATEMENT_LABEL_A;
else if (CONDITION_LABEL_B) 
    STATEMENT_LABEL_B;
else 
    STATEMENT_LABEL_C;

if (CONDITION_LABEL_A) {
    STATEMENT_LABEL_A1;
    STATEMENT_LABEL_A2;
    STATEMENT_LABEL_AN;
} else if (CONDITION_LABEL_B) {
    STATEMENT_LABEL_B1;
    STATEMENT_LABEL_B2;
    STATEMENT_LABEL_BN;
} else {
    STATEMENT_LABEL_C1;
    STATEMENT_LABEL_C2;
    STATEMENT_LABEL_CN;
}
```

### Nested if-else statements 
```JS
if (CONDITION_LABEL_A) {
    STATEMENT_LABEL_A1;
    STATEMENT_LABEL_A2;
    STATEMENT_LABEL_AN;

    if (CONDITION_LABEL_B) {
        STATEMENT_LABEL_B1;
        STATEMENT_LABEL_B2;
        STATEMENT_LABEL_BN;
    }
    else if (CONDITION_LABEL_C) {
        STATEMENT_LABEL_C1;
        STATEMENT_LABEL_C2;
        STATEMENT_LABEL_CN;
    }
    else {
        STATEMENT_LABEL_D1;
        STATEMENT_LABEL_D2;
        STATEMENT_LABEL_DN;
    }
} else {
    STATEMENT_LABEL_E1;
    STATEMENT_LABEL_E2;
    STATEMENT_LABEL_EN;
}
```

### Switch statement 
```JS
switch (VALUE_LABEL) {
    case CASE_LABEL_A:
        STATEMENT_LABEL_A1;
        STATEMENT_LABEL_A2;
        STATEMENT_LABEL_AN;
        break;
    case CASE_LABEL_B:
        STATEMENT_LABEL_B1;
        STATEMENT_LABEL_B2;
        STATEMENT_LABEL_BN;
        break;
}

switch (VALUE_LABEL) {
    case CASE_LABEL_A:
        STATEMENT_LABEL_A1;
        STATEMENT_LABEL_A2;
        STATEMENT_LABEL_AN;
        break;
    case CASE_LABEL_B:
        STATEMENT_LABEL_B1;
        STATEMENT_LABEL_B2;
        STATEMENT_LABEL_BN;
        break;
    default:
        STATEMENT_LABEL_C1;
        STATEMENT_LABEL_C2;
        STATEMENT_LABEL_CN;
        break;
}
```

### While loop 
:::columns
```JS
// Single statement while loop
while (CONDITION_LABEL) 
    STATEMENT_LABEL;

// Multi-statement while loop (RECOMMENDED)
while (CONDITION_LABEL) {
    STATEMENT_LABEL_1;
    STATEMENT_LABEL_2;
    STATEMENT_LABEL_N;
    INCREMENT_LABEL;
}
```

```Mermaid
flowchart TD
  A1[Statement before loop] --> A2
  A2 -->|false| B[Statement after Loop]
  A2[Evaluate CONDITION_LABEL] --> A3[Evaluate STATEMENT_LABEL_1]
  A3 --> A4[Evaluate STATEMENT_LABEL_2]
  A4 --> A5[Evaluate STATEMENT_LABEL_N]
  A5 --> A6[Evaluate INCREMENT_LABEL]
  A6 --> A2
  
```
:::

### Do-while loop 

:::columns
```JS
// Single statement do-while loop
do 
    STATEMENT_LABEL;
while (CONDITION_LABEL);

// Multi-statement do-while loop (RECOMMENDED)
do {
    STATEMENT_LABEL_1;
    STATEMENT_LABEL_2;
    STATEMENT_LABEL_N;
    INCREMENT_LABEL;
} while (CONDITION_LABEL);
```

```Mermaid
flowchart TD
  A1[Statement before loop] --> A2
  A2[Evaluate STATEMENT_LABEL_1] --> A3[Evaluate STATEMENT_LABEL_2]
  A3 --> A4[STATEMENT_LABEL_N]
  A4 --> A5[Evaluate INCREMENT_LABEL]
  A5 --> C{Evaluate CONDITION_LABEL}
  C -->|false| D[Statement after Loop]
  C -->|true| A2
```
:::

### For loop 
:::columns
```JS
// Single statement for loop
for (INIT_LABEL; CONDITION_LABEL; INCREMENT_LABEL) 
    STATEMENT_LABEL;

// Multi-statement for loop (RECOMMENDED)
for (INIT_LABEL; CONDITION_LABEL; INCREMENT_LABEL) {
    STATEMENT_LABEL_1;
    STATEMENT_LABEL_2;
    STATEMENT_LABEL_N;
}
```

```Mermaid
flowchart TD
        A1[Statement before loop] --> A
        A[Evaluate INIT_LABEL] --> B{Evaluate CONDITION_LABEL}
        B -->|false| G[Statement after Loop]
        B -->|true| C[Evaluate STATEMENT_LABEL_1]
        C --> D[Evaluate STATEMENT_LABEL_2]
        D --> E[STATEMENT_LABEL_N]
        E --> F[Evaluate INCREMENT_LABEL]
        F --> B
```
:::

Breakdown: 
- INIT_LABEL: This is the initialization step, executed once before the loop starts. Typically used to declare and initialize the loop counter.
- CONDITION_LABEL: This is the condition evaluated before each iteration. If the condition is true, the loop continues; otherwise, it stops.
- INCREMENT_LABEL: This is executed at the end of each iteration. It's often used to update the loop counter.
- STATEMENT_LABEL_1, STATEMENT_LABEL_2, etc: These represent the block of code executed during each iteration while the condition is met.

Examples: 
```JS
// INIT_LABEL is let i = 0
// CONDITION_LABEL is i < 10
// INCREMENT_LABEL is  i++
// STATEMENT_LABEL_1 is console.log(i)
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// INIT_LABEL is let i = 0
// CONDITION_LABEL is i < array.length
// INCREMENT_LABEL is i++
// STATEMENT_LABEL_1 is const element = array[i];
// STATEMENT_LABEL_2 is console.log(element);
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}
```

### ForEach loop over array 
:::columns
```JS
let array = [VALUE_LABEL_1, VALUE_LABEL_2, VALUE_LABEL_N];
array.forEach(function(element) {
    STATEMENT_LABEL_1;
    STATEMENT_LABEL_2;
    STATEMENT_LABEL_N;
});
```

```Mermaid
flowchart TD
  A[Statement before loop] --> A1{Loop over elements}
  A1 --> |No more elements| B[End of loop]
  A1 --> A2[Evaluate STATEMENT_LABEL_1]
  A2 --> A3[Evaluate STATEMENT_LABEL_2]
  A3 --> A4[STATEMENT_LABEL_N]
  A4 --> A1
```
:::

Breakdown:
- VALUE_LABEL_1, VALUE_LABEL_2, etc.: These are the elements of the array.
- STATEMENT_LABEL_1, STATEMENT_LABEL_2, etc.: These represent the block of code executed during each iteration while the condition is met.

Example: 
```JS
// VALUE_LABEL_1 is 5
// VALUE_LABEL_2 is 6
// VALUE_LABEL_3 is 7
// STATEMENT_LABEL_1 is console.log(element);
const array = [5, 6, 7];
array.forEach(function(element) {
    console.log(element);
});
```

## Class-based syntax
### Class declaration with constructor 
```JS
let object = new ClassName();
class ClassName {
    constructor() {
        STATEMENT_LABEL_1;
        STATEMENT_LABEL_2;
        STATEMENT_LABEL_N;
    }
}

let object = new ClassName(ARGUMENT_LABEL_1, ARGUMENT_LABEL_2, ARGUMENT_LABEL_N);
class ClassName {
    constructor(PARAMETER_LABEL_1, PARAMETER_LABEL_2, PARAMETER_LABEL_N) {
        STATEMENT_LABEL_1;
        STATEMENT_LABEL_2;
        STATEMENT_LABEL_N;
    }
}
```

### Class declaration with property 
```JS
let obj = new ClassName();
let value = obj.propertyName;
obj.propertyName = NEW_VALUE_LABEL;

class ClassName {
    constructor() {
        this.propertyName = INITIAL_VALUE_LABEL;
    }
}
```

### Class declaration with get/set property
```JS
let object = new ClassName();
let value = object.propertyName;
object.propertyName = NEW_VALUE_LABEL;

class ClassName {
    constructor() {
        this._propertyName = INITIAL_VALUE_LABEL;
    }

    get propertyName() {
        return this._propertyName;
    }

    set propertyName(value) {
        STATEMENT_LABEL_1;
        STATEMENT_LABEL_2;
        STATEMENT_LABEL_N;
        this._propertyName = value;
    }
}
```

### Class declaration with methods without return values
```JS
let object = new ClassName();
object.methodName1();
object.methodName2(ARGUMENT_LABEL_1, ARGUMENT_LABEL_2, ARGUMENT_LABEL_N);

class ClassName {
    methodName1() {
        STATEMENT_LABEL_1;
        STATEMENT_LABEL_2;
        STATEMENT_LABEL_N;
    }
    methodName2(PARAMETER_LABEL_1, PARAMETER_LABEL_2, PARAMETER_LABEL_N) {
        STATEMENT_LABEL_1;
        STATEMENT_LABEL_2;
        STATEMENT_LABEL_N;
    }
}
```

### Class declaration with methods with return values
```JS
let object = new ClassName();
let value1 = object.methodName1();
let value2 = object.methodName2(ARGUMENT_LABEL_1, ARGUMENT_LABEL_2, ARGUMENT_LABEL_N);

class ClassName {
    methodName1() {
        STATEMENT_LABEL_A1;
        STATEMENT_LABEL_A2;
        STATEMENT_LABEL_AN;
        return RETURN_VALUE_LABEL;
    }
    methodName2(PARAMETER_LABEL_1, PARAMETER_LABEL_2, PARAMETER_LABEL_N) {
        STATEMENT_LABEL_B1;
        STATEMENT_LABEL_B2;
        STATEMENT_LABEL_BN;
        return RETURN_VALUE_LABEL;
    }
}
```