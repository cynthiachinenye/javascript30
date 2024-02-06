// Define an interface for a person
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    email?: string; // Optional property
}

// Function to greet a person
function greet(person: Person): void {
    console.log(`Hello, ${person.firstName} ${person.lastName}!`);
    console.log(`You are ${person.age} years old.`);
    if (person.email) {
        console.log(`Your email is ${person.email}.`);
    }
}

// Define a person object
const myPerson: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    // email: "john@example.com"
};

// Call the greet function
greet(myPerson);
