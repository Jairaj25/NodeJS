import { Router } from 'express';
import * as employeeControllers from '../controllers/employeesController.js';

var router = Router();

router.get('/', employeeControllers.getAllDeptManagersController );
router.get('/maxSalary', employeeControllers.getMaxSalaryOfEmployeeByDeptartmentController );
router.get('/sumDept', employeeControllers.getSumOfDeptartmentWiseEmployeeSalaryController );
router.get('/ageRange', employeeControllers.getEmployeesWithAgeInRangeFrom30To40Controller );
router.get('/page', employeeControllers.getAllEmployeesWithPaginationController );
router.get('/sorted', employeeControllers.getAllEmployeesSortedWithAscAgeAndDescHireDateController );

export default router