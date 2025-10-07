class Vehicle {                     // Base class
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log(`${this.name} makes a generic vehicle sound`);
    }
}

// Derived class inherits from Vehicle
class Bike extends Vehicle {
    constructor(name, type) {
        super(name);                // Call the parent constructor
        this.type = type;           // e.g., Sports, Cruiser, Mountain
    }

    // Override sound method
    sound() {
        console.log(`${this.name} - ${this.type} goes vroom vroom!`);
    }
}

// Create an object of Bike class
const bike = new Bike("Yamaha R15", "Sports");
bike.sound();   // 👉 Output: Yamaha R15 - Sports goes vroom vroom!
