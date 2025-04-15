export default function createIteratorObject(report) {
	const allEmployees = report.allEmployees;
	const employees = [];

	for (const department of Object.values(allEmployees)) {
		employees.push(...department);
	}
	return employees[Symbol.iterator]()
}
