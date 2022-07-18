class FileSystem {
    writeToFile(data) {
        // Implementation
    }
}
  
class ExternalDB {
    writeToDatabase(data) {
        // Implementation
    }
}
  
class LocalPersistance {
    push(data) {
        // Implementation
    }
}

// This is a high-level class that should not depend on the lower-level classes. 
  
class PersistanceManager {
    saveData(db, data) {
        if (db instanceof FileSystem) {
            db.writeToFile(data)
        }
    
        if (db instanceof ExternalDB) {
            db.writeToDatabase(data)
        }
    
        if (db instanceof LocalPersistance) {
            db.push(data)
        }
    }
}

// If we could reimplement all the lower classes with a single save() method instead like this:

class NewFileSystem {
    save(data) {
        // Implementation
    }
}
  
class NewExternalDB {
    save(data) {
        // Implementation
    }
}
  
class NewLocalPersistance {
    save(data) {
        // Implementation
    }
}

// Then it is possible to reduce dependencies with the following class:

class PersistanceManager {
    saveData(db, data) {
        db.save(data)
    }
}
  