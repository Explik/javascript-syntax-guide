# JavaScript syntax guide 

## Table of contents
[[toc]]

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

## Notation used for syntax
### Code notation 
The syntax examples consists of regular code and placeholders, which are used to represent the variable names, function names, etc.
The placeholders are written like this `PLACEHOLDER_LABEL`, where `PLACEHOLDER_LABEL` is the name of the placeholder. The placeholder can be any valid variable name, function name, value, etc as long as it is consistent throughout the example. 

```JS
let PLACEHOLDER_LABEL_1 = "Hello world!";
let PLACEHOLDER_LABEL_2 = 'Hello other world!';

console.log(PLACEHOLDER_LABEL_1); // prints "Hello world!"
console.log(PLACEHOLDER_LABEL_2); // prints "Hello other world!"
```

**Can be read as:**
```JS
let variable1 = "Hello world!";
let variable2 = 'Hello other world!';

console.log(variable1); // prints "Hello world!"
console.log(variable2); // prints "Hello other world!"
```

**Or**
```JS
let message1 = "Hello world!";
let message2 = 'Hello other world!';

console.log(message1); // prints "Hello world!"
console.log(message2); // prints "Hello other world!"
```

### Flowchart notation
Flowcharts are used, throughtout the guide, to represent non-linear flows in code.
Usually code flows from one line to the next, but in some cases the flow can be interrupted by conditions, loops, etc. In these cases, a flowchart is used to represent the flow of the code.

Linear flow: 
:::columns 
```JS
STATEMENT_LABEL_1; 
STATEMENT_LABEL_2;
STATEMENT_LABEL_N;
```

```Mermaid
flowchart TD
  A[Evaluate STATEMENT_LABEL_1] --> B[Evaluate STATEMENT_LABEL_2]
  B --> C[Evaluate STATEMENT_LABEL_N]
```
:::

Non-linear flow:
:::columns 
```JS
STATEMENT_LABEL_1;
if (CONDITION_LABEL) 
    STATEMENT_LABEL_2;
else 
    STATEMENT_LABEL_3;
STATEMENT_LABEL_4;
```

```Mermaid
flowchart TD
  A[Evaluate STATEMENT_LABEL_1] --> B[Evaluate CONDITION_LABEL]
  B -->|true| C[Evaluate STATEMENT_LABEL_2]
  C --> D[Evaludate STATEMENT_LABEL_4]
  B -->|false| E[Evaluate STATEMENT_LABEL_3]
  E --> D
```
:::

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

## Function syntax
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
:::asymmetric-columns
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
  A[Statement before function call] --> A0[PARAMETER_LABEL_1 = ARGUMENT_LABEL_1\n PARAMETER_LABEL_2 = ARGUMENT_LABEL_2\n ELIPSIS_LABEL]
  A0 --> B[Evaluate CONDITION_LABEL]
  B -->|false| C[Evaluate STATEMENT_LABEL_1]
  C --> D[Evaluate STATEMENT_LABEL_2]
  D --> E[Evaluate STATEMENT_LABEL_N]
  E --> F[Statement after function call]
  B -->|true| F

  subgraph "function call"
    A0
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
// Single-statement if statement
if (CONDITION_LABEL) 
    STATEMENT_LABEL;

// Multi-statement if statement (RECOMMENDED)
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

Breakdown:
- CONDITION_LABEL: This is the condition evaluated by the if statement. If the condition is true, the statements inside the if block are executed; otherwise, they are skipped.
- STATEMENT_LABEL_1, STATEMENT_LABEL_2, etc.: These are the statements executed when the condition is true.

Examples: 
```JS
// CONDITION_LABEL is i === 0
// STATEMENT_LABEL is console.log("i is 0");
if (i === 0)
  console.log("i is 0");
console.log("Unrelated statement");
```

```JS
// CONDITION_LABEL is i === 0
// STATEMENT_LABEL_1 is console.log("First statement inside if block");
// STATEMENT_LABEL_2 is console.log("Second statement inside if block");
if (i === 0) {
  console.log("First statement inside if block");
  console.log("Second statement inside if block");
}
console.log("Unrelated statement");
```

### If/else statement (single-statement)
:::columns
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

Breakdown: 
- CONDITION_LABEL: This is the condition evaluated by the if statement. If the condition is true, the statements inside the if block are executed; otherwise, the statements inside the else block are executed
- STATEMENT_LABEL_1: This is the statement executed when the condition is true.
- STATEMENT_LABEL_2: This is the statement executed when the condition is false.

Examples: 
```JS
// CONDITION_LABEL is i === 0
// STATEMENT_LABEL_1 is console.log("i is 0");
// STATEMENT_LABEL_2 is console.log("i is not 0");
if (i === 0) 
  console.log("Statement nested in if statement");
else 
  console.log("Statement nested in else statement");
```

### If/else statement (multi-statement)
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

Breakdown: 
- CONDITION_LABEL: This is the condition evaluated by the if statement. If the condition is true, the statements inside the if block are executed; otherwise, the statements inside the else block are executed
- STATEMENT_LABEL_A1, STATEMENT_LABEL_A2, etc.: These are the statements executed when the condition is true.
- STATEMENT_LABEL_B1, STATEMENT_LABEL_B2, etc.: These are the statements executed when the condition is false.

Examples: 
```JS
if (i === 0) {
  console.log("First statement inside if block");
  console.log("Second statement inside if block");
} else {
  console.log("First statement inside else block");
  console.log("Second statement inside else block");
}
```

### If/else if/else (single statement)
:::asymmetric-columns
```JS
if (CONDITION_LABEL_A) 
    STATEMENT_LABEL_A;
else if (CONDITION_LABEL_B) 
    STATEMENT_LABEL_B;
else 
    STATEMENT_LABEL_C;
```

```Mermaid
flowchart TD
  A0[Statement before if-else chain] --> A[Evaluate CONDITION_LABEL_A]
  A -->|true| B[Evaluate STATEMENT_LABEL_A]
  B --> C[Statement after if-else chain]
  A -->|false| D[Evaluate CONDITION_LABEL_B]
  D -->|true| E[Evaluate STATEMENT_LABEL_B]
  E --> C
  D -->|false| F[Evaluate STATEMENT_LABEL_C]
  F --> C
```
:::

Breakdown:
- CONDITION_LABEL_A, CONDITION_LABEL_B: These are the conditions evaluated by the if-else if statements. If the condition is true, the corresponding statement is executed; otherwise, the next condition is evaluated.
- STATEMENT_LABEL_A, STATEMENT_LABEL_B, STATEMENT_LABEL_C: These are the statements executed when the corresponding condition is true.

Examples: 
```JS
// CONDITION_LABEL_A is i === 0
// STATEMENT_LABEL_A is console.log("Statement inside if block");
// CONDITION_LABEL_B is i === 1
// STATEMENT_LABEL_B is console.log("Statement inside else if block");
// STATEMENT_LABEL_C is console.log("Statement inside else block");
if (i === 0) 
  console.log("Statement inside if block");
else if (i === 1) 
  console.log("Statement inside else if block");
else 
  console.log("Statement inside else block");
```

### If/else if/else (multi-statement)
:::asymmetric-columns
```JS
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

```Mermaid
flowchart TD
  A0[Statement before if-else chain] --> A[Evaluate CONDITION_LABEL_A]
  A -->|true| B[Evaluate STATEMENT_LABEL_A1]
  B --> C[Evaluate STATEMENT_LABEL_A2]
  C --> D[Evaluate STATEMENT_LABEL_AN]
  D --> E[Statement after if-else chain]
  A -->|false| F[Evaluate CONDITION_LABEL_B]
  F -->|true| G[Evaluate STATEMENT_LABEL_B1]
  G --> H[Evaluate STATEMENT_LABEL_B2]
  H --> I[Evaluate STATEMENT_LABEL_BN]
  I --> E
  F -->|false| J[Evaluate STATEMENT_LABEL_C1]
  J --> K[Evaluate STATEMENT_LABEL_C2]
  K --> L[Evaluate STATEMENT_LABEL_CN]
  L --> E
```
:::

Examples: 
```JS
// CONDITION_LABEL_A is i === 0
// STATEMENT_LABEL_A1 is console.log("First statement inside if block");
// STATEMENT_LABEL_A2 is console.log("Second statement inside if block");
// CONDITION_LABEL_B is i === 1
// STATEMENT_LABEL_B1 is console.log("First statement inside else if block");
// STATEMENT_LABEL_B2 is console.log("Second statement inside else if block");
// STATEMENT_LABEL_C1 is console.log("First statement inside else block");
// STATEMENT_LABEL_C2 is console.log("Second statement inside else block");
if (i === 0) {
  console.log("First statement inside if block");
  console.log("Second statement inside if block");
} else if (i === 1) {
  console.log("First statement inside else if block");
  console.log("Second statement inside else if block");
} else {
  console.log("First statement inside else block");
  console.log("Second statement inside else block");
}
```

### Nested if-else statements 
:::asymmetric-columns
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

```Mermaid
flowchart TD
  A0[Statement before nested if-else statement] --> A[Evaluate CONDITION_LABEL_A]
  A -->|true| B[Evaluate STATEMENT_LABEL_A1]
  B --> C[Evaluate STATEMENT_LABEL_A2]
  C --> D[Evaluate STATEMENT_LABEL_AN]
  D --> E[Evaluate CONDITION_LABEL_B]
  E -->|true| F[Evaluate STATEMENT_LABEL_B1]
  F --> G[Evaluate STATEMENT_LABEL_B2]
  G --> H[Evaluate STATEMENT_LABEL_BN]
  H --> I[Statement after nested if-else statement]
  E -->|false| J[Evaluate CONDITION_LABEL_C]
  J -->|true| K[Evaluate STATEMENT_LABEL_C1]
  K --> L[Evaluate STATEMENT_LABEL_C2]
  L --> M[Evaluate STATEMENT_LABEL_CN]
  M --> I
  J -->|false| N[Evaluate STATEMENT_LABEL_D1]
  N --> O[Evaluate STATEMENT_LABEL_D2]
  O --> P[Evaluate STATEMENT_LABEL_DN]
  P --> I
  A -->|false| Q[Evaluate STATEMENT_LABEL_E1]
  Q --> R[Evaluate STATEMENT_LABEL_E2]
  R --> S[Evaluate STATEMENT_LABEL_EN]
  S --> I
```
:::

Breakdown:
- CONDITION_LABEL_A: This is the condition evaluated by the outer if statement. If the condition is true, the statements inside the outer if block are executed
- STATEMENT_LABEL_A1, STATEMENT_LABEL_A2, etc.: These are the statements executed when the outer if condition is true.
- CONDITION_LABEL_B: This is the condition evaluated by the inner if statement. If the condition is true, the statements inside the inner if block are executed
- STATEMENT_LABEL_B1, STATEMENT_LABEL_B2, etc.: These are the statements executed when the inner if condition is true.
- CONDITION_LABEL_C: This is the condition evaluated by the inner else if statement. If the condition is true, the statements inside the inner else if block are executed
- STATEMENT_LABEL_C1, STATEMENT_LABEL_C2, etc.: These are the statements executed when the inner else if condition is true.
- STATEMENT_LABEL_D1, STATEMENT_LABEL_D2, etc.: These are the statements executed when the inner else condition is true.
- STATEMENT_LABEL_E1, STATEMENT_LABEL_E2, etc.: These are the statements executed when the outer if condition is false.

Examples: 
```JS
if (i === 0) {
  if (j === 0) {
    console.log("i and j are both 0");
  } else if (j === 1) {
    console.log("i is 0 and j is 1");
  } else {
    console.log("i is 0 and j is not 0 or 1");
  }
}
else {
  console.log("i is not 0");
}
```

### Switch statement (without default case)
:::asymmetric-columns
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
    case CASE_LABEL_C:
        STATEMENT_LABEL_C1;
        STATEMENT_LABEL_C2;
        STATEMENT_LABEL_CN;
        break;
}
```

```Mermaid
flowchart TD
  A[Statement before switch statement] --> B[Evaluate VALUE_LABEL]
  B -->|CASE_LABEL_A| C[Evaluate STATEMENT_LABEL_A1]
  C --> D[Evaluate STATEMENT_LABEL_A2]
  D --> E[Evaluate STATEMENT_LABEL_AN]
  E --> F[Statement after switch statement]
  B -->|CASE_LABEL_B| G[Evaluate STATEMENT_LABEL_B1]
  G --> H[Evaluate STATEMENT_LABEL_B2]
  H --> I[Evaluate STATEMENT_LABEL_BN]
  I --> F
  B -->|CASE_LABEL_C| J[Evaluate STATEMENT_LABEL_C1]
  J --> K[Evaluate STATEMENT_LABEL_C2]
  K --> L[Evaluate STATEMENT_LABEL_CN]
  L --> F
```
:::

Breakdown:
- VALUE_LABEL: This is the value being evaluated by the switch statement.
- CASE_LABEL_A, CASE_LABEL_B: These are the cases evaluated by the switch statement. If the value matches the case, the statements inside the case block are executed. If no matching case is found, the switch statement does nothing.
- STATEMENT_LABEL_A1, STATEMENT_LABEL_A2, etc.: These are the statements executed when the value matches the CASE_LABEL_A.
- STATEMENT_LABEL_B1, STATEMENT_LABEL_B2, etc.: These are the statements executed when the value matches the CASE_LABEL_B.
- STATEMENT_LABEL_C1, STATEMENT_LABEL_C2, etc.: These are the statements executed when the value matches the CASE_LABEL_C.

Example: 
```JS
const input = createInput();

// VALUE_LABEL is input.value()
// CASE_LABEL_A is "A"
// STATEMENT_LABEL_A1 is console.log("A was selected");
// CASE_LABEL_B is "B"
// STATEMENT_LABEL_B1 is console.log("B was selected");
// CASE_LABEL_C is "C"
// STATEMENT_LABEL_C1 is console.log("C was selected");
switch (input.value()) {
    case "A":
        console.log("A was selected");
        break;
    case "B":
        console.log("B was selected");
        break;
    case "C":
        console.log("C was selected");
        break;
}
```

### Switch statement (with default case)
:::asymmetric-columns
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
    default:
        STATEMENT_LABEL_C1;
        STATEMENT_LABEL_C2;
        STATEMENT_LABEL_CN;
        break;
}
```

```Mermaid
flowchart TD
  A[Statement before switch statement] --> B[Evaluate VALUE_LABEL]
  B -->|CASE_LABEL_A| C[Evaluate STATEMENT_LABEL_A1]
  C --> D[Evaluate STATEMENT_LABEL_A2]
  D --> E[Evaluate STATEMENT_LABEL_AN]
  E --> F[Statement after switch statement]
  B -->|CASE_LABEL_B| G[Evaluate STATEMENT_LABEL_B1]
  G --> H[Evaluate STATEMENT_LABEL_B2]
  H --> I[Evaluate STATEMENT_LABEL_BN]
  I --> F
  B -->|No matching case| J[Evaluate STATEMENT_LABEL_C1]
  J --> K[Evaluate STATEMENT_LABEL_C2]
  K --> L[Evaluate STATEMENT_LABEL_CN]
  L --> F
```
:::

Breakdown:
- VALUE_LABEL: This is the value being evaluated by the switch statement.
- CASE_LABEL_A, CASE_LABEL_B: These are the cases evaluated by the switch statement. If the value matches the case, the statements inside the case block are executed. If no matching case is found, the statements inside the default block are executed.
- STATEMENT_LABEL_A1, STATEMENT_LABEL_A2, etc.: These are the statements executed when the value matches the CASE_LABEL_A.
- STATEMENT_LABEL_B1, STATEMENT_LABEL_B2, etc.: These are the statements executed when the value matches the CASE_LABEL_B.
- STATEMENT_LABEL_C1, STATEMENT_LABEL_C2, etc.: These are the statements executed when no matching case is found.

Example: 
```JS
const input = createInput();

// VALUE_LABEL is input.value()
// CASE_LABEL_A is "A"
// STATEMENT_LABEL_A1 is console.log("A was selected");
// CASE_LABEL_B is "B"
// STATEMENT_LABEL_B1 is console.log("B was selected");
// STATEMENT_LABEL_C1 is console.log("No matching case was found");
switch (input.value()) {
    case "A":
        console.log("A was selected");
        break;
    case "B":
        console.log("B was selected");
        break;
    default:
        console.log("No matching case was found");
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

Breakdown:
- CONDITION_LABEL: This is the condition evaluated before each iteration. If the condition is true, the loop continues; otherwise, it stops. Note, if the condition is false initially, the loop will not execute.
- STATEMENT_LABEL_1, STATEMENT_LABEL_2, etc.: These represent the block of code executed during each iteration while the condition is met.
- INCREMENT_LABEL: This is executed at the end of each iteration. It's often used to update the loop counter. Note, an increment statement is not strictly required, but its absence is most often a mistake.

Examples: 
```JS
// CONDITION_LABEL is i < 10
// STATEMENT_LABEL_1 is console.log(i)
// INCREMENT_LABEL is i++
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
```

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

Breakdown:
- CONDITION_LABEL: This is the condition evaluated after each iteration. If the condition is true, the loop continues; otherwise, it stops. Note, even if the condition is false initially, the loop will execute at least once.
- STATEMENT_LABEL_1, STATEMENT_LABEL_2, etc.: These represent the block of code executed during each iteration while the condition is met.
- INCREMENT_LABEL: This is executed at the end of each iteration. It's often used to update the loop counter. Note, an increment statement is not strictly required, but its absence is most often a mistake.

Example: 
```JS
// Loop counter is declared outside the loop
let i = 0; 

// Run the loop from i=0 to i=10
// STATEMENT_LABEL_1 is console.log(i)
// INCREMENT_LABEL is i++
// CONDITION_LABEL is i < 10
do {
    console.log(i);
    i++;
} while (i < 10);
```

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
let object = new CLASS_NAME_LABEL();
class CLASS_NAME_LABEL {
    constructor() {
        STATEMENT_LABEL_1;
        STATEMENT_LABEL_2;
        STATEMENT_LABEL_N;
    }
}

let object = new CLASS_NAME_LABEL(ARGUMENT_LABEL_1, ARGUMENT_LABEL_2, ARGUMENT_LABEL_N);
class CLASS_NAME_LABEL {
    constructor(PARAMETER_LABEL_1, PARAMETER_LABEL_2, PARAMETER_LABEL_N) {
        STATEMENT_LABEL_1;
        STATEMENT_LABEL_2;
        STATEMENT_LABEL_N;
    }
}
```

Example: 
```JS
// Create a new instance of the Person class
// CLASS_NAME_LABEL is Person
// ARGUMENT_LABEL_1 is "John"
// ARGUMENT_LABEL_2 is "Doe"
let person = new Person("John", "Doe");

// Declare the Person class
// CLASS_NAME_LABEL is Person
// PARAMETER_LABEL_1 is firstName
// PARAMETER_LABEL_2 is lastName
// STATEMENT_LABEL_1 is this.firstName = firstName;
// STATEMENT_LABEL_2 is this.lastName = lastName;
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
```

### Class declaration with property 
```JS
let obj = new CLASS_NAME_LABEL();
let value = obj.PROPERTY_NAME_LABEL;
obj.PROPERTY_NAME_LABEL = NEW_VALUE_LABEL;

class ClassName {
    constructor() {
        this.PROPERTY_NAME_LABEL = INITIAL_VALUE_LABEL;
    }
}
```

Example: 
```JS
// Create a new instance of the Person class
// CLASS_NAME_LABEL is Person
let person = new Person();

// Access the name property of the person object
// PROPERTY_NAME_LABEL is name
console.log(person.name); // Prints "John Doe"

// Change the name property of the person object
// PROPERTY_NAME_LABEL is name
// NEW_VALUE_LABEL is "Johnny"
person.name = "Johnny";
console.log(person.name); // Prints "Johnny"

// Declare the Person class
// CLASS_NAME_LABEL is Person
// PROPERTY_NAME_LABEL is name
// INITIAL_VALUE_LABEL is "John Doe"
class Person {
    constructor(name) {
        this.name = "John Doe";
    }
}
```

### Class declaration with get/set property
```JS
let object = new CLASS_NAME_LABEL();
let value = object.PROPERTY_NAME_LABEL;
object.PROPERTY_NAME_LABEL = NEW_VALUE_LABEL;

class CLASS_NAME_LABEL {
    constructor() {
        this.PRIVATE_PROPERTY_NAME_LABEL = INITIAL_VALUE_LABEL;
    }

    get PROPERTY_NAME_LABEL() {
        return this.PRIVATE_PROPERTY_NAME_LABEL;
    }

    set PROPERTY_NAME_LABEL(value) {
        STATEMENT_LABEL_1;
        STATEMENT_LABEL_2;
        STATEMENT_LABEL_N;
        this.PRIVATE_PROPERTY_NAME_LABEL = value;
    }
}
```

Example: 
```JS
// Create a new instance of the Person class
// CLASS_NAME_LABEL is Person
let person = new Person();

// Access the name property of the person object
// PROPERTY_NAME_LABEL is name
let name = person.name;
console.log(name) // Prints "John Doe"

// Change the name property of the person object
// PROPERTY_NAME_LABEL is name
// NEW_VALUE_LABEL is "Johnny"
person.name = "Johnny"; // Prints "Setting name to Johnny"
console.log(person.name); // Prints "Johnny"

// Declare the Person class
class Person {
    constructor() {
        this._name = "John Doe";
    }

    get name() {
        return this._name;
    }

    set name(value) {
        console.log("Setting name to " + value);
        this._name = value;
    }
}
```

### Class declaration with methods without return values
```JS
let object = new CLASS_NAME_LABEL();
object.METHOD_NAME_LABEL_1();
object.METHOD_NAME_LABEL_2(ARGUMENT_LABEL_1, ARGUMENT_LABEL_2, ARGUMENT_LABEL_N);

class ClassName {
    METHOD_NAME_LABEL_1() {
        STATEMENT_LABEL_1;
        STATEMENT_LABEL_2;
        STATEMENT_LABEL_N;
    }
    METHOD_NAME_LABEL_1(PARAMETER_LABEL_1, PARAMETER_LABEL_2, PARAMETER_LABEL_N) {
        STATEMENT_LABEL_1;
        STATEMENT_LABEL_2;
        STATEMENT_LABEL_N;
    }
}
```

Example: 
```JS
// Create a new instance of the Person class
// CLASS_NAME_LABEL is Person
let person = new Person();

// Call the greet method of the person object
// METHOD_NAME_LABEL is greet
person.greetWorld(); // Prints "Hello world!"

// Call the greet method of the person object with a name argument
// METHOD_NAME_LABEL is greet
// ARGUMENT_LABEL_1 is "Alice"
person.greetPerson("Alice"); // Prints "Hello, Alice!"

// Declare the Person class
// CLASS_NAME_LABEL is Person
// METHOD_NAME_LABEL_1 is greetWorld
// METHOD_NAME_LABEL_2 is greetPerson
class Person {
    greetWorld() {
        console.log("Hello world!");
    }

    greetPerson(name) {
      console.log("Hello, " + name + "!");
    }
}
```

### Class declaration with methods with return values
```JS
let object = new ClassName();
let value1 = object.METHOD_NAME_LABEL_1();
let value2 = object.METHOD_NAME_LABEL_2(ARGUMENT_LABEL_1, ARGUMENT_LABEL_2, ARGUMENT_LABEL_N);

class ClassName {
    METHOD_NAME_LABEL_1() {
        STATEMENT_LABEL_A1;
        STATEMENT_LABEL_A2;
        STATEMENT_LABEL_AN;
        return RETURN_VALUE_LABEL;
    }
    METHOD_NAME_LABEL_2(PARAMETER_LABEL_1, PARAMETER_LABEL_2, PARAMETER_LABEL_N) {
        STATEMENT_LABEL_B1;
        STATEMENT_LABEL_B2;
        STATEMENT_LABEL_BN;
        return RETURN_VALUE_LABEL;
    }
}
```

Example: 
```JS
// Create a new instance of the Calculator class
// CLASS_NAME_LABEL is Calculator
let calculator = new Calculator();

// Call the add method of the calculator object
// METHOD_NAME_LABEL_1 is add
let sum = calculator.add(5, 3);
console.log(sum); // Prints "8"

// Call the multiply method of the calculator object
// METHOD_NAME_LABEL_2 is multiply
let product = calculator.multiply(5, 3);
console.log(product); // Prints "15"

// Declare the Calculator class
// CLASS_NAME_LABEL is Calculator
// METHOD_NAME_LABEL_1 is add
// METHOD_NAME_LABEL_2 is multiply
class Calculator {
    add(a, b) {
        return a + b;
    }

    multiply(a, b) {
        return a * b;
    }
}
```