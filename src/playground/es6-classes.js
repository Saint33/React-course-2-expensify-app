class Person {
    constructor(name='loh', age=0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `hi i am ${this.name}`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if(this.hasHomeLocation()) {
            greeting += ` Im visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}

const me = new Student('Andrew XYI', 35, 'Computer Science');


console.log(me.getDescription());

const other = new Student();

console.log(other.getDescription());

const sam = new Traveler('Sam',23,'Moscow');
console.log(sam.getGreeting());