class StorageMap {
  private data = new Map();
  has(key) {
    this.data.has(key);
    return this;
  }
  add(key, v) {
    this.data.set(key, v);
    return this;
  }
  remove(key) {
    this.data.delete(key);
    return this;
  }
}
