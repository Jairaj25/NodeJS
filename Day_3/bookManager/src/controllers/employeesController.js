import * as employeeServices from '../services/employeeServices.js';
import createError from 'http-errors';

const getAllDeptManagersController = async (req, res, next) => {
    try {
        const allDeptartmentManagers = await employeeServices.getAllDeptManagers();
        console.log(allDeptartmentManagers);
        res.send(allDeptartmentManagers);
    }
    catch (err) {
        next(createError(500, err));
    }
}

const getMaxSalaryOfEmployeeByDeptartmentController = async (req, res, next) => {
    try {
        const maxSalariesPerDepartment = await employeeServices.getMaxSalaryOfEmployeeByDeptartment();
        console.log(maxSalariesPerDepartment);
        res.send(maxSalariesPerDepartment);
    }
    catch (err) {
        next(createError(500, err));
    }
}

const getSumOfDeptartmentWiseEmployeeSalaryController = async (req, res, next) => {
    try {
        const sumSalaryOfEmployeesDeptartmentWise = await employeeServices.getSumOfDeptartmentWiseEmployeeSalary();
        console.log(sumSalaryOfEmployeesDeptartmentWise);
        res.send(sumSalaryOfEmployeesDeptartmentWise);
    }
    catch (err) {
        next(createError(500, err));
    }
}

const getEmployeesWithAgeInRangeFrom30To40Controller = async (req, res, next) => {
    try {
        const filteredEmployees = await employeeServices.getEmployeesWithAgeInRangeFrom30To40();
        console.log(filteredEmployees);
        res.send(filteredEmployees);
    }
    catch (err) {
        next(createError(500, err));
    }
}

const getAllEmployeesWithPaginationController = async (req, res, next) => {
    try {
        const paginatedEmployees = await employeeServices.getAllEmployeesWithPagination();
        console.log(paginatedEmployees);
        res.send(paginatedEmployees);
    }
    catch (err) {
        next(createError(500, err));
    }
}

const getAllEmployeesSortedWithAscAgeAndDescHireDateController = async (req, res, next) => {
    try {
        const sortedEmployees = await employeeServices.getAllEmployeesSortedWithAscAgeAndDescHireDate();
        console.log(sortedEmployees);
        res.send(sortedEmployees);
    }
    catch (err) {
        next(createError(500, err));
    }
}

export { getAllDeptManagersController, getMaxSalaryOfEmployeeByDeptartmentController, getSumOfDeptartmentWiseEmployeeSalaryController, getEmployeesWithAgeInRangeFrom30To40Controller, getAllEmployeesWithPaginationController, getAllEmployeesSortedWithAscAgeAndDescHireDateController}