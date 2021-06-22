type GeneralFunction = (...params: any[]) => any;
type ResetConditionFunction = (...params: any[]) => boolean;
type PairFunction = (prev: unknown, now: unknown) => boolean;

export function debounceTime<F extends GeneralFunction>(fn: F, delayTime: number) {
  let timeoutHandler = 0;
  return function(this: any, ...args: any[]) {
    clearTimeout(timeoutHandler);
    timeoutHandler = window.setTimeout(() => fn.apply(this, args), delayTime);
  } as F;
}

export function throttleTime<F extends GeneralFunction>(fn: F, intervalTime: number) {
  let isWaiting = false;
  return function(this: any, ...args: any[]) {
    if (!isWaiting) {
      isWaiting = true;
      fn.apply(this, args);
      setTimeout(() => (isWaiting = false), intervalTime);
    }
  } as F;
}

/**
 * Execute function when the condition is met,
 * then ignore the call of function until the condition is met again.
 * @param fn the function to be executed
 * @param initValue the init arguments of the `fn`
 * @param condition another function that returns a boolean to tell
 * if the condition is met. Its arguments is the previous arguments
 * and current arguments.
 * * @param resetFn the function to tell us it's time to reset the condition
 */
export function throttleCondition<F extends GeneralFunction>(
  fn: F,
  initValue: any[],
  condition: PairFunction,
  resetFn: ResetConditionFunction
) {
  let lastArg = initValue;
  return function (this: any, ...args: any[]) {
    if (condition(lastArg, args)) {
      fn.apply(this, args);
      lastArg = args;
    }
    // need to reset the saved arguments (lastArg)
    if (resetFn(args)) {
      lastArg = initValue;
    }
  } as F;
}
