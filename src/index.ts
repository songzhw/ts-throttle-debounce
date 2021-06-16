type GeneralFunction = (...params: any[]) => void;
type PairFunction = (prev: any, now: any) => boolean;

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

export function throttleCondition<F extends GeneralFunction>(fn: F, initValue: any[], condition: PairFunction) {
  let lastArg = initValue;
  return function(this: any, ...args: any[]) {
    if (condition(lastArg, args)) {
      fn.apply(this, args);
      lastArg = args;
    }
  } as F;
}
