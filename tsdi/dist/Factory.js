"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StorageMap_1 = require("./StorageMap");
require("reflect-metadata");
function Factory(fn) {
    var args = Reflect.getMetadata("design:paramtypes", fn) || [];
    var _args = args.map(function (arg) {
        return StorageMap_1.STORAGEMAP.has(arg) ? StorageMap_1.STORAGEMAP.get(arg) : "";
    });
    return new (fn.bind.apply(fn, [void 0].concat(_args)))();
}
exports.Factory = Factory;
//# sourceMappingURL=Factory.js.map