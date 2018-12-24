import { STORAGESET, STORAGEMAP } from "./StorageMap";
export function Inject() {
  return function(target) {
    STORAGESET.add(target);
    return target;
  };
}
export function Provider(fn) {
  STORAGEMAP.add(fn, new fn());
  console.log(STORAGEMAP.get(fn));
}
