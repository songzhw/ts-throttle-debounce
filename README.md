# ts-throttle-debounce

This library provides several utils functions, which is especially good if your library could not load a big library such as RxJS, but at the same time you still need the debounce or throttle.

Also this library is written in TypeScript, so you don't need to worry about the type issues.

## API

### 1. debounceTime(func, delayTime)
The debounce merchanism is based on time.

### 2. throttleTime(func, intervalTime)
this is also based on time

### 3. throttleCondition(func, initValues, conditionFunc)
* `func` is the function you want to throttle
* `initValue` is the argument of func when you first call it
* `conditionFunc` is a function, which takes the previous argument and current argument as arguments, and it returns a boolean.
When the functions returns true, it's time to run `func`.
