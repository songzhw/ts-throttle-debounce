import { LoadManager } from "./LoadManager";
import { debounceTime } from "../src";

const refresh = (prog: number) => {
  console.log(`szw progress = `, prog);
};

console.log(`start 1`);
const debouncedCallback = debounceTime(refresh, 100);

const source = new LoadManager();
source.setCallback(debouncedCallback);
source.load();

