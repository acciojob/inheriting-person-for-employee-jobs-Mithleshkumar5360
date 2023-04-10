// complete this js code
//function Person(name, age) {}
class Person {
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	get name(){
		return this.name;
	}
	set age(age){
		this.age = age;
	}
}
class Student extends Person{
	study(){
		console.log(`${this.name} is studying`);
	}
}
class Teacher extends Person{
	teach(){
		console.log(`${this.name} is teaching`);
	}
}

function Employee(name, age, jobTitle) {}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
