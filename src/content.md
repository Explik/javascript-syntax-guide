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

## Expression syntax
TODO write section

## Statement syntax
### Variable declaration
```JS
let variable;

let variable = INITIAL_VALUE_LABEL;

const variable = VALUE_LABEL;
```

### Variable reassigment
```JS
let variable; 
variable = NEW_VALUE_LABEL;

let variable = INITIAL_VALUE_LABEL; 
variable = NEW_VALUE_LABEL;
```

### Object variable declaration 
```JS
let object = {};

let object = { key1: VALUE_LABEL_1, key2: VALUE_LABEL_2, ELIPSIS_LABEL };
```

### Object member reading 
```JS
let object = { key1: VALUE_LABEL_1, key2: VALUE_LABEL_2, ELIPSIS_LABEL };
let value = object.key1;
```

### Object member assignment 
```JS
let object = { key1: VALUE_LABEL_1, key2: VALUE_LABEL_2, ELIPSIS_LABEL };
object.key1 = NEW_VALUE_LABEL;
```

### Object method call 
```JS
let object = ELIPSIS_LABEL;
object.methodName1();
object.methodName2(ARGUMENT_LABEL_1, ARGUMENT_LABEL_2);
```

### Array variable declaration 
```JS
let array = [];

let array = [VALUE_LABEL_1, VALUE_LABEL_2, VALUE_LABEL_N];
```

### Array element reading 
```JS
let array = [VALUE_LABEL_1, VALUE_LABEL_2, VALUE_LABEL_N];
let value = array[INDEX_VALUE_LABEL];
```

### Array element assignment 
```JS
let array = [VALUE_LABEL_1, VALUE_LABEL_2, VALUE_LABEL_N];
array[INDEX_VALUE_LABEL] = NEW_VALUE_LABEL;
```

### Array extension 
```JS
let array = [VALUE_LABEL_1, VALUE_LABEL_2, VALUE_LABEL_N];
array.push(NEW_VALUE_LABEL);

let array = [VALUE_LABEL_1, VALUE_LABEL_2, VALUE_LABEL_N];
array[array.length] = NEW_VALUE_LABEL;
```

# Function syntax
### Function declaration 
```JS
function functionName() { 
    STATEMENT_LABEL_1;
    STATEMENT_LABEL_2;
    STATEMENT_LABEL_N;
}

function functionName(PARAMETER_LABEL_1, PARAMETER_LABEL_2, PARAMETER_LABEL_N) { 
    STATEMENT_LABEL_1;
    STATEMENT_LABEL_2;
    STATEMENT_LABEL_N;
}
```

### Void function calls without return value
```JS
functionName();
functionName();

function functionName() {
    STATEMENT_LABEL_1;
    STATEMENT_LABEL_2;
    STATEMENT_LABEL_N;
}

functionName(ARGUMENT_LABEL_A1, ARGUMENT_LABEL_A2, ARGUMENT_LABEL_AN);
functionName(ARGUMENT_LABEL_B1, ARGUMENT_LABEL_B2, ARGUMENT_LABEL_BN);

function functionName(PARAMETER_LABEL_1, PARAMETER_LABEL_2, PARAMETER_LABEL_N) {
    STATEMENT_LABEL_1;
    STATEMENT_LABEL_2;
    STATEMENT_LABEL_N;
};
```

### Function calls with return value
```JS
let value1 = functionName();
let value2 = functionName();

function functionName() {
    STATEMENT_LABEL_1;
    STATEMENT_LABEL_2;
    STATEMENT_LABEL_N;
    return RETURN_VALUE_LABEL;
}

let value1 = functionName(ARGUMENT_LABEL_A1, ARGUMENT_LABEL_A2, ARGUMENT_LABEL_AN);
let value2 = functionName(ARGUMENT_LABEL_B1, ARGUMENT_LABEL_B2, ARGUMENT_LABEL_BN);

function functionName(parameter1, parameter2, parametern) {
    STATEMENT_LABEL_1;
    STATEMENT_LABEL_2;
    STATEMENT_LABEL_N;
    return RETURN_VALUE_LABEL;
};
```

### Function call with early return 
```JS
functionName(); 

function functionName() {
    if (CONDITION_LABEL) 
        return;
    
    STATEMENT_LABEL_1;
    STATEMENT_LABEL_2;
    STATEMENT_LABEL_N;
}
```

### Function call with early return and value 
```JS
let value = functionName();

function functionName() {
    if (CONDITION_LABEL) 
        return RETURN_VALUE_LABEL;
    
    STATEMENT_LABEL_1;
    STATEMENT_LABEL_2;
    STATEMENT_LABEL_N;
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


- INIT_LABEL: This is the initialization step, executed once before the loop starts. Typically used to declare and initialize the loop counter.
- CONDITION_LABEL: This is the condition evaluated before each iteration. If the condition is true, the loop continues; otherwise, it stops.
- INCREMENT_LABEL: This is executed at the end of each iteration. It's often used to update the loop counter.
- STATEMENT_LABEL_1, STATEMENT_LABEL_2, etc: These represent the block of code executed during each iteration while the condition is met.

### ForEach loop over array 
```JS
let array = [VALUE_LABEL_1, VALUE_LABEL_2, VALUE_LABEL_N];
array.forEach(function(element) {
    STATEMENT_LABEL_1;
    STATEMENT_LABEL_2;
    STATEMENT_LABEL_N;
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