# JS For loop
- INIT_LABEL: This is the initialization step, executed once before the loop starts. Typically used to declare and initialize the loop counter.
- CONDITION_LABEL: This is the condition evaluated before each iteration. If the condition is true, the loop continues; otherwise, it stops.
- INCREMENT_LABEL: This is executed at the end of each iteration. It's often used to update the loop counter.
- STATEMENT_LABEL_1, STATEMENT_LABEL_2, etc: These represent the block of code executed during each iteration while the condition is met.

```JS
let x = 0; 

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