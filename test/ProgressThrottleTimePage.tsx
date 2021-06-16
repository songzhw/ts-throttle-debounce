import { LoadManager } from "./LoadManager";
import { throttleTime } from "../src";

const refresh = (prog: number) => {
  console.log(`szw progress = `, prog);
};


const throttledCallback = throttleTime(refresh, 100);
const source = new LoadManager();
source.setCallback(throttledCallback);
source.load();
