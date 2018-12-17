"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StorageMap = (function () {
    function StorageMap() {
        this.data = new Map();
    }
    StorageMap.prototype.has = function (key) {
        return this.data.has(key);
    };
    StorageMap.prototype.add = function (key, v) {
        this.data.set(key, v);
        return this;
    };
    StorageMap.prototype.remove = function (key) {
        this.data.delete(key);
        return this;
    };
    StorageMap.prototype.get = function (key) {
        return this.data.get(key);
    };
    return StorageMap;
}());
var StorageSet = (function () {
    function StorageSet() {
        this.data = new Set();
    }
    StorageSet.prototype.has = function (fn) {
        return this.data.has(fn);
    };
    StorageSet.prototype.add = function (fn) {
        this.data.add(fn);
        return this;
    };
    StorageSet.prototype.remove = function (fn) {
        return this.data.delete(fn);
    };
    return StorageSet;
}());
exports.STORAGEMAP = new StorageMap();
exports.STORAGESET = new StorageSet;
//# sourceMappingURL=StorageMap.js.map