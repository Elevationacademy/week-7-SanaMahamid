class UniqueArray{
    constructor(){
        this.uniqueArray = []
        this.uniqueArrayLength = 0
        this.uniqueObject = {}
    }

    _isObjectsEqual(object1, object2) {
        const keys1 = Object.keys(object1);
        const keys2 = Object.keys(object2);
      
        if (keys1.length !== keys2.length) {
          return false;
        }
      
        for (let key of keys1) {
          if (object1[key] !== object2[key]) {
            return false;
          }
        }
      
        return true;
      }

      _isPrimitive(item) {
        if(typeof item === "number" || typeof item === "string" || typeof item === "boolean" ||typeof item === "undefined" || typeof item === "null" || typeof item === "symbol") {
            return true
        } else {
            return false
        }
    }

    add(item) {
            if(!this.exists(item)) {
                this.uniqueArray[this.uniqueArrayLength++] = item
                this.uniqueObject[item] = 1
            }
    }

    showAll(){
        console.log(this.uniqueArray)
    }

    exists(item){
        if(this.uniqueObject[item]){
            return true
        }
        return false
    }

    get(index){
        if(index < this.uniqueArrayLength){
            return this.uniqueArray[index]
        }
        return -1
    }

    

    
}

