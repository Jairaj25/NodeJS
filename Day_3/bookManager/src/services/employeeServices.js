import { mySQLConn } from "../shared/database/connections/mySQLDatabase.js";

const getAllDeptManagers = async () => {
    try {
        const [allDeptManager] = await mySQLConn.query(
            `SELECT CONCAT (e.first_name,' ', e.last_name) AS Manager_Name, e.gender, d.dept_name, s.salary
            FROM dept_manager dm 
            JOIN employees e ON e.emp_no = dm.emp_no 
            JOIN salaries s ON s.emp_no = dm.emp_no
            JOIN departments d ON d.dept_no = dm.dept_no;`
        );
        return allDeptManager;
    }
    catch (error) {
        return error.message
    }
}

const getMaxSalaryOfEmployeeByDeptartment = async () => {
    try {
        const [maxEmpSalaryDeptWiseQueryResult] = await mySQLConn.query(
            `SELECT d.dept_name AS department_name, CONCAT(e.first_name, ' ', e.last_name) AS employee_name, s.max_salary
            FROM departments d
            JOIN dept_emp de ON de.dept_no = d.dept_no
            JOIN employees e ON e.emp_no = de.emp_no
            JOIN(
                    SELECT de.dept_no, MAX(s.salary) AS max_salary FROM dept_emp de JOIN salaries s ON s.emp_no = de.emp_no GROUP BY de.dept_no
                ) s ON s.dept_no = d.dept_no
            WHERE s.max_salary = (SELECT MAX(salary) FROM salaries WHERE emp_no = e.emp_no);`
        );
        return maxEmpSalaryDeptWiseQueryResult;
    }
    catch (error) {
        return error.message
    }
}

const getSumOfDeptartmentWiseEmployeeSalary = async () => {
    try {
        const [sumOfSalaryPerDepartment] = await mySQLConn.query(
            `SELECT d.dept_name AS department_name, SUM(s.salary) AS totalSalary
            FROM departments d
            JOIN dept_emp de ON de.dept_no = d.dept_no
            JOIN salaries s ON s.emp_no = de.emp_no
            GROUP BY d.dept_name;`
        );
        return sumOfSalaryPerDepartment;
    }
    catch (error) {
        return error.message
    }
}
const getEmployeesWithAgeInRangeFrom30To40 = async () => {
    try {
        const [employeesInRange] = await mySQLConn.query(
            `SELECT CONCAT(e.first_name, ' ', e.last_name) AS employee_name, s.salary
            FROM employees e
            JOIN salaries s ON e.emp_no = s.emp_no
            WHERE TIMESTAMPDIFF(YEAR, e.birth_date, CURDATE()) BETWEEN 30 AND 40;`
        );
        return employeesInRange;
    }
    catch (error) {
        return error.message
    }
}

const getAllEmployeesWithPagination = async () => {
    try {
        const paginatedEmployees = 
            `SELECT CONCAT(e.first_name, ' ', e.last_name) AS employee_name, d.dept_name AS department_name, 
            TIMESTAMPDIFF(YEAR, e.birth_date, CURDATE()) AS employee_age, t.title AS employee_title
            FROM employees e
            JOIN dept_emp de ON de.emp_no = e.emp_no
            JOIN departments d ON d.dept_no = de.dept_no
            JOIN titles t ON t.emp_no = e.emp_no
            ORDER BY e.birth_date
            LIMIT ? offset ?;`

        const [result] = await mySQLConn.query(paginatedEmployees, [limit, offset])
        
        return result;
    }
    catch (error) {
        return error.message
    }
}

const getAllEmployeesSortedWithAscAgeAndDescHireDate = async () => {
    try {
        const [sortedEmployees] = await mySQLConn.query(
            `SELECT *
            FROM employees
            ORDER BY birth_date ASC, hire_date DESC;`
        );
        return sortedEmployees;
    }
    catch (error) {
        return error.message
    }
}

export { getAllDeptManagers, getMaxSalaryOfEmployeeByDeptartment, getSumOfDeptartmentWiseEmployeeSalary, getEmployeesWithAgeInRangeFrom30To40, getAllEmployeesWithPagination, getAllEmployeesSortedWithAscAgeAndDescHireDate }