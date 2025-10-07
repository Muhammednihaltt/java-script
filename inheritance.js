// one class can inherit properties and method form other class
//by using extends key words


//base class

class animal {
    constructor(name) {     //initiaisation the properties
        this.name = name;
    }
    speak() {
        console.log(`${this.name}make a sound`);

    }
}

//derived class inherits from animal;

class Dog extends animal{
    constructor(name, breed){
        super(name);          //call the parents constructor
        this.breed = breed;
    }

    //override speak method 

    speak(){
      console.log(`${this.name}-${this.breed} barks`);
      
    }
}

const dog = new Dog
("Rex","german shepherd");
dog.speak()