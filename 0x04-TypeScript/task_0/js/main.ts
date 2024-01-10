interface Student = {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

let student_1: Student = {
	firstName: 'John';
	lastName: 'Doe';
	age: 19;
	location: 'Nairobi-Kenya';
}

let student_2: Student = {
	firstName: 'Jane';
	lastName: 'Doe';
	age: 20;
	location: 'Nairobi-Kenya';
}

let studentsList[] = [student_1, student_2];

function renderTable(studentList: Student[]){
	const table = document.createElement("table");

	// create a header row
	const headerRow = table.insertRow();
	const headerCell1 = headerRow.insertCell(0);
	headerCell1.textContent = "FirstName";
	const headerCell2 = headerRow.insertCell(1);
	headerCell2.textContent = "Location";

	// create a row for each student
	studentList.ForEach((student) => {
		const row = table.insertRow();
		const cell1 = row.insertCell(0);
		cell1.textContent = student.firstName;
		const cell2 = row.insertCell(1);
		cell2.textContent = student.location;
	});
	document.body.appendChild(table);
}

// Render the table
renderTable(studentsList);
