"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StorageMap_1 = require("./StorageMap");
require("reflect-metadata");
function Factory(fn) {
    var args = Reflect.getMetadata("design:paramtypes", fn) || [];
    args.forEach(function (a) {
        console.log(StorageMap_1.STORAGEMAP, a);
        console.log(StorageMap_1.STORAGEMAP.has(a));
        console.log(StorageMap_1.STORAGEMAP.get(a));
    });
    return new (fn.bind.apply(fn, [void 0].concat(args)))();
}
exports.Factory = Factory;
//# sourceMappingURL=Factory.js.map