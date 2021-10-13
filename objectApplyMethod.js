const person = {
    firstName: "Faisal",
    lastName: "Ahmed",
    age: 24,
    salary: 15000,
    getFullName: function (){
        console.log(this.firstName, this.lastName);
    },
    //using 3 different parameter.
    chargeBill: function (amount, tips, taxs){
        this.salary = this.salary - amount - tips - taxs;
        return this.salary;
    }
}

const robin = {
    fistName: "Imran",
    lastName: "Ahmed",
    salary: 25000,
}

const rifat = {
    fistName: "Khaled",
    lastName: "Saifullah",
    salary: 50000,
}

//declare the same thing in one line in apply method. putting 3 parameter as an array value.
person.chargeBill.apply(robin, [2345, 135, 78]);
console.log(robin.salary);