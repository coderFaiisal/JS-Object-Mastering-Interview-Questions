const person = {
    firstName: "Faisal",
    lastName: "Ahmed",
    age: 24,
    salary: 15000,
    getFullName: function (){
        console.log(this.firstName, this.lastName)
    },
    chargeBill: function (amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}
person.chargeBill(100);
person.chargeBill(1900);
console.log(person.salary);



const robin = {
    fistName: "Imran",
    lastName: "Ahmed",
    fullName: function(){
        console.log(this.firstName, this.lastName);
    },
    salary: 10000,
    debit: function(taka){
        this.salary = this.salary - taka;
        return this.salary;
    }
}
    
robin.debit(121);
console.log(robin.salary);