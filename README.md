# ts-throttle-debounce

This library provides several utils functions, which is especially good if your library could not load a big library such as RxJS, but at the same time you still need the debounce or throttle.

Also this library is written in TypeScript, so you don't need to worry about the type issues.

--- 
## API

### 1. debounceTime(func, delayTime)
The debounce merchanism is based on time.

### 2. throttleTime(func, intervalTime)
this is also based on time

### 3. throttleCondition(func, initValues, conditionFunc, resetFunc)
* `func` is the function you want to throttle
* `initValue` is the argument of func when you first call it
* `conditionFunc` is a function, which takes the previous argument and current argument as arguments, and it returns a boolean.
When the functions returns true, it's time to run `func`.
* `resetFunc` is a function, which would reset the saved arguments when the condition is met  

----

**Example**:
```typescript
const refresh = (prog: number) => {
  console.log(`szw progress = `, prog);
};

const condition = (prev: any, now: any) => (now[0] - prev[0] > 0.3);
const reset = (arg: number[]) => arg[0] === 1;
const throttledCallback = throttleCondition(refresh, [0], condition, reset);
```
