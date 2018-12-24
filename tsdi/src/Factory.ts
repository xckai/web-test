import { STORAGEMAP } from "./StorageMap";
import "reflect-metadata";
export function Factory<T>(fn: { new (...argss): T }): T {
  let args = Reflect.getMetadata("design:paramtypes", fn) || [];
  let _args = args.map(arg => {
    return STORAGEMAP.has(arg) ? STORAGEMAP.get(arg) : "";
  });

  return new fn(..._args);
}
