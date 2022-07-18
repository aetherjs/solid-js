// This is how we would implement an abstract class in js I guess...

class Phone {
    constructor() {
        if (this.constructor.name === "Phone")
        throw new Error("Phone class is abstract");
    }

    call(number) {}

    takePhoto() {}

    connectToWifi() {}
}

// Can we derive IPhone X from the Phone class?

class IphoneX extends Phone {
    call(number) {
        // Calling implememntation 
    }
    
    takePhoto() {
        // Take photo with a camera
    }
    
    connectToWifi() {
        // Connect to wifi using the network module
    }
}

// But an old nokia would violate the interface segregation principle

class Nokia3310 extends Phone {
    call(number) {
      // Some similar implementation 
    }
  
    takePhoto() {
      // Argh, I don't have a camera
    }
  
    connectToWifi() {
      // Argh, I don't know what wifi is
    }
}
