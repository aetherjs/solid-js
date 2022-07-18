class TodoList {
    constructor() {
      this.items = []
    }
  
    addItem(text) {
      this.items.push(text)
    }
  
    removeItem(index) {
      this.items = items.splice(index, 1)
    }
  
    toString() {
      return this.items.toString()
    }
}

// Refarctor the file so that the TodoList class isn't responsible
// for saving and loading stuff from files.

class FileManager {
    save(filename) {
        fs.writeFileSync(filename, this.toString())
    }
    
    load(filename) {
        // Loads file from the system
    }  
}