const THROTTLE_LOADING_PROGRESS_GAP = 0.2;
export function conditionOfLoadingProgress(
  lastArg: unknown,
  currentArg: unknown
) {
  if (Array.isArray(lastArg) && Array.isArray(currentArg)) {
    return currentArg[0] - lastArg[0] > THROTTLE_LOADING_PROGRESS_GAP;
  }
  return true;
}
export function timeToResetCondition(args: number[]) {
  return args[0] === 1;
}

/*
describe("throttle", ()=> {

  test("throttle with condition should limit the call of functions", () => {
    const fn = jest.fn();
    const result = throttleCondition(
      fn,
      [0],
      conditionOfLoadingProgress,
      timeToResetCondition
    );
    result(0.07);
    result(0.12);
    result(0.18);
    result(0.21); // call once
    expect(fn).toBeCalledTimes(1);
  });

  test("throttle with condition should work even when the diff is great", () => {
    const fn = jest.fn();
    const result = throttleCondition(
      fn,
      [0],
      conditionOfLoadingProgress,
      timeToResetCondition
    );
    result(0.1);
    result(0.4); // call once
    result(0.5); // does not trigger fn
    result(0.8); // call twice
    expect(fn).toBeCalledTimes(2);
  });

  test("throttle with condition should reset the saved arguments when possible", () => {
    const fn = jest.fn();
    const result = throttleCondition(
      fn,
      [0],
      conditionOfLoadingProgress,
      timeToResetCondition
    );
    result(0.1);
    result(0.9); // call once
    result(1); // time to reset
    result(0.21); // call twice
    expect(fn).toBeCalledTimes(2);
  });
})
*/
