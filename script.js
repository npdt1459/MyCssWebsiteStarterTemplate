// ---------------  Arrays  ------------------
var names = ["Tommy", 'James', 'Sandy'];
var naughtyList = [];
names.splice(2, 1);     // Take off 1 element at index 2
names.push("Damn");     // Append
console.log(names);
var index = names.indexOf("Tommy");
if (index === -1){
    console.log('No Tommy');
} else {
    console.log('Tommy is in position', index, 'and now moved to naughty');
    naughtyList.push(names[index]);
    console.log(naughtyList);
}

// ---------------  If Statements  ------------------
var cat1 = 5;
var cat2 = 10;
if (cat2 === 10 || cat1 > cat2) {   // OR
    // stuff
}
if (cat2 === 10 && cat2 > cat1) {   // AND
    // stuff
}

// ---------------  For Loops  ------------------
var Value = 10;
for (var x = 0; x <= Value; x += 1){
    console.log(Value - x); 
}

// For loop using length
var students = ['Jingle', 'Nathan', 'Barry', 'Jabbar'];
for (var x = 0; x < students.length; x += 1){
    console.log(students[x]);
}

// ---------------  Functions  ------------------
function area(length, width){
    return length * width;
}
var rectanglesAreas = [];
rectanglesAreas.push(area(10, 15));
rectanglesAreas.push(area(14, 20));
console.log(rectanglesAreas);

balance = 500;
function makeTransaction(cost) {
    if (cost <= balance) {
        balance -= cost;
        console.log('Purchased!');
    } else{
        console.log('Declined!');
    }
    console.log(balance, 'remaining');
}
makeTransaction(79);
makeTransaction(100);
makeTransaction(50);

// Option 1
function firstLast(first, last) {
    console.log('first name:', first);
    console.log('last name:', last);
}
console.log(firstLast('Nathan', 'Pascale'));

// Option 2
var customerName = function(first, last) {
    console.log('first name:', first, 'last name:', last);
}
console.log(customerName('Nathan', 'Pascale'));
// Adding functions to a list
bankOperations = [];
bankOperations.push(customerName);
console.log(bankOperations[0]('Nathan', 'Pascale'));

// ---------------  Objects  ------------------

// Option 1 - Creating a function to make objects
function student(first, last, age) { 
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.greeting = function() {
        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
    };
}
var students = [];
students.push(new student('Nathan', 'Pascale', 25));
students.push(new student('Jasmine', 'Walsh', 56));
for (var x = 0; x < students.length; x++) {
    console.log(students[x].greeting())
}
// Calling all keys in an object
var student = students[0];
for (var key in student) {
    console.log(student[key]);
}

// Option 2 - Manually
var bunch = {
    firstName: 'Jayne',      // Property: Value
    lastName: 'Phillip',     // Property: Value
    age: 8,                // Property: Value  
    greeting: function() {
        return "Hi, I'm", this.firstName, "and I'm", this.age, "years old.";
    }
};
console.log(bunch.firstName);
console.log(bunch.greeting());  // Have to add () as it's a function

// Option 3`
// Creates new empty object, then fill it
var bunch1 = new Object();
bunch1.firstName = 'John';
bunch1.lastName = 'Parker';
bunch1.age = 12;

// Option 4
var bunch2 = {};
bunch2.firstName = 'Zach';
bunch2.lastName = 'Fatty';
bunch2.age = 19;

var bunchNames = [];
bunchNames.push(bunch);     // Pushing object1
bunchNames.push(bunch1);    // Pushing object2
bunchNames.push(bunch2);    // Pushing object3
for (var x = 0; x < bunchNames.length; x++) {
    console.log(bunchNames[x]);
}

// ---------------  Bind  ------------------

this.car = 'Ugly Honda'
var myGarage = {
    car: 'Aston Martin',
    getCar: function(){
        return this.car;
    }
};
var storeCarForLater = myGarage.getCar;
console.log(storeCarForLater);      // Gives me ugly car, WTF, goes to global "this."

var realGetCarFunction = storeCarForLater.bind(myGarage);    // this. in myGarage
console.log(realGetCarFunction);


