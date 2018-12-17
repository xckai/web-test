class StorageMap {
  private data = new Map<any, any>();
  has(key) {
    return this.data.has(key);
  }
  add(key, v) {
    this.data.set(key,v)
    return this;
  }
  remove(key) {
    this.data.delete(key);
    return this;
  }
  get(key){
    
    return this.data.get(key)
  }
}
class StorageSet{
  private data =new Set()
  has(fn){
    return this.data.has(fn)
  }
  add(fn){
     this.data.add(fn)
     return this
  }
  remove(fn){
    return this.data.delete(fn)
  }
}
export const STORAGEMAP= new StorageMap()
export const STORAGESET = new StorageSet
