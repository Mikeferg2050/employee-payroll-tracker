// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  // Collect employee data
  const employees = []
  let advance = true

  while (advance) {
    const firstName = prompt("Employee first name");
    const lastName = prompt("Employee last name");
    const salary = prompt("Employee salary");


    console.log(firstName)
    console.log(lastName)
    console.log(salary)

    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseInt(salary)
    };

    console.log(employee)
    employees.push(employee)

    const cont = confirm("would you like to add another Employee?");
    if (!cont) {
      advance = false;
    }


  }

  console.log(employees)

  return employees;


  // const random = Math.floor(Math.random() * 10);


  // console.log(random)

}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  console.log("Start of the displayAverageSalary")
  console.log(employeesArray)

  // const sumOfSalaries = (employeesArray[0].salary + employeesArray[1].salary + employeesArray[2].salary)

  // add all salaries
  // 50 + 100 + 150 = 300
  // 0 + 1 + 2 + 3 + 4

  const initialValue = 0;
  const sumWithInitial = employeesArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue.salary,
    initialValue,
  );

  console.log(sumWithInitial);

  // divide the sum by the number of salaries
  // 300 / 3 = 100

  const average = sumWithInitial / employeesArray.length

    console.log(average)



}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  console.log("Start of the getRandomEmployee")
  console.log(employeesArray)


}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
