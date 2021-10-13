const person = {
    firstName: "Faisal",
    lastName: "Ahmed",
    age: 24,
    salary: 15000,
    getFullName: function (){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount, tips){
        this.salary = this.salary - amount - tips;
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

const robinChargeBill = person.chargeBill.bind(robin);
robinChargeBill(1001, 45);
console.log(robin.salary);

const rifatChargeBill = person.chargeBill(rifat);
rifatChargeBill(113, 23);
console.log(rifat);