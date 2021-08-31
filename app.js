var firstName = 'Luke';
let lastName = 'Cavy';
let age = 25;
let isMale = true;
let isFemale = false;
var surname = null;
var person = {
    'name': firstName,
    'age': age,
    'dob': '07/28/1996'
};

var friend = {
    name: 'Rae',
    age: 28,
    address: {
        address1: 'Somewhere in Roanoake',
        state: 'Virginia',
        country: 'United States'
    }
};

const fullName = 'Luke Cavy';

let val = (50);

if(val == 50) {
    console.log('True');
} 
else if (val == 69 || val == 420) {
    console.log ('Nice')
}
else if (val > 100 && val < 103) {
    console.log ('Wow')
}
else {
    console.log ('False')
}

switch (val) {
    case 10:
        console.log ('it is 10');
    case 50:
        console.log ('50')
        break;

    default:
        console.log('default');
        break;
}

let colors = ['Black', 'White', 'Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Violent', 'Purple', 'Indigo', 'Pink']

for (let i = 0; i < colors.length; i++) {
    console.log (colors[i]);

    if(colors[i] == 'Green') {
        console.log('That is my favorite!');
        break;
    }
}

var count = 0;
while(count < colors.length) {
    console.log(colors[count]);
    count++;
}

while(false){
    console.log('naj')
}

console.log(val)

console.log(firstName);
console.log(lastName);
console.log(fullName);
console.log(surname);
console.log(person);
console.log(friend.address.country);
console.log(val)

person.name;
person.age;
person.dob;

