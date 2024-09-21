let person = { 
    name: 'Max',
    age:30,
    hobbies: ['Sports', 'Cooking'],
    greet: () =>{
        alert('Hi There');
    }
};

person.isAdmin = true; 

console.log(delete person.age);
console.log( person);