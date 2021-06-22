import { throttleCondition } from "../src";
import { LoadManager } from "./LoadManager";

const refresh = (prog: number) => {
  console.log(`szw progress = `, prog);
};

const condition = (prev: unknown, now: unknown) => {
  if (Array.isArray(prev) && Array.isArray(now)) {
    return now[0] - prev[0] > 0.3;
  }
  return true;
};
const reset = (arg: number[]) => arg[0] === 1;
const throttledCallback = throttleCondition(refresh, [0], condition, reset);

const source = new LoadManager();
source.setCallback(throttledCallback);
source.load();

