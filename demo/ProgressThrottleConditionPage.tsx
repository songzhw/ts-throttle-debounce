import { throttleCondition } from "../src";
import { LoadManager } from "./LoadManager";

const refresh = (prog: number) => {
  console.log(`szw progress = `, prog);
};

const condition = (prev: any, now: any) => (now[0] - prev[0] > 0.3);
const throttledCallback = throttleCondition(refresh, [0], condition);

const source = new LoadManager();
source.setCallback(throttledCallback);
source.load();

