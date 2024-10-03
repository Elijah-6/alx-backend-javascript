# ES6 Classes

This project focuses on the use of ES6 classes in JavaScript. ES6 classes provide a more intuitive and structured way to create objects and handle inheritance.

## Table of Contents
- [Introduction](#introduction)
- [Class Syntax](#class-syntax)
- [Inheritance](#inheritance)
- [Getters and Setters](#getters-and-setters)
- [Static Methods](#static-methods)
- [Examples](#examples)
- [References](#references)

## Introduction
ES6 classes are syntactical sugar over JavaScript's existing prototype-based inheritance. They offer a cleaner and more concise way to create and manage objects.

## Class Syntax
A basic class definition in ES6 looks like this:
```javascript
class MyClass {
    constructor(value) {
        this.value = value;
    }

    method() {
        console.log(this.value);
    }
}
```

## Inheritance
Classes can extend other classes using the `extends` keyword:
```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}
```

## Getters and Setters
Getters and setters allow you to define methods that are executed when a property is accessed or modified:
```javascript
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.height * this.width;
    }
}
```

## Static Methods
Static methods are called on the class itself, not on instances of the class:
```javascript
class Helper {
    static log(message) {
        console.log(message);
    }
}

Helper.log('This is a static method.');
```

## Examples
Here are some examples of ES6 classes in action:
```javascript
class Car {
    constructor(brand) {
        this.brand = brand;
    }

    display() {
        console.log(`This car is a ${this.brand}.`);
    }
}

const myCar = new Car('Toyota');
myCar.display();
```

## References
- [MDN Web Docs: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [JavaScript Info: Classes](https://javascript.info/class)
