interface Teacher {
	readonly firstName:string;
	readonly firstName:string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

interface Directors extends Teacher{
	numberOfRepors: number;
}

interface printTeacherFunction{
	(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
	return `${firstName.charAt(0).toUpperCase()}.${lastName}`;
};


interface StudentConstructor {
	firstName: string;
	lastName: string;
}

interface StudentInterface{
	workOnHomework(): string;
	displayName(): string;
}

class StudentClass implements StudentInterface{
	private firstName: string;
	private lastName: string;

	// constructor implementing the interface
	constructor({ firstName, lastName }: StudentConstructor){
		this.firstName = firstName;
		this.lastName = lastName;
	}
	workOnHomework(): string {
		return "Currently working"
	}
	// method implementing the interface
	displayName(): string {
		return this.firstName;
	}
}
