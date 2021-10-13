//Create object from class.
class Person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        
    }
}

//"new" usually use for access thing from class.
const robin = new Person("Imran", "Ahmed", 14000);
console.log(robin);
const rifat = new Person("Khaled", "Saifullah", 15000);
console.log(rifat);