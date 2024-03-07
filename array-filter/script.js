console.log("arrray filter");


// filetr method does as the name implies it filters certain element from an array
const numbers = [-10, 0, -2, 15, -36, 25];
const positiveNumbers = numbers.filter((number) => {
  return number >= 0;
});
console.log(positiveNumbers);


// Second Example

// A start up wants to reward the employees with 7 or more hours of overtime
var employeesData = [
	{
    	name: "Sebastian",
    	overtime: 5
	},
	{
    	name: "Cardi Vee",
    	overtime: 10
	},
	{
    	name: "George Lopez",
    	overtime: 12
	}
];

const employeesToReward = employeesData.filter((employee) => employee.overtime >= 7);
console.log(employeesToReward)

