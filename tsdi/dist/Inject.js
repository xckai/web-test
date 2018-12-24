"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StorageMap_1 = require("./StorageMap");
function Inject() {
    return function (target) {
        StorageMap_1.STORAGESET.add(target);
        return target;
    };
}
exports.Inject = Inject;
function Provider(fn) {
    StorageMap_1.STORAGEMAP.add(fn, new fn());
    console.log(StorageMap_1.STORAGEMAP.get(fn));
}
exports.Provider = Provider;
//# sourceMappingURL=Inject.js.map