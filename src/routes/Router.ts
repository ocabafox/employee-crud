import { Router } from 'express';

import {
  deleteEmployee,
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee
} from '../services';

const router = Router();

router.route('/api/v1/employees').get(getAllEmployees);
router.route('/api/v1/employee/:id').get(getEmployeeById);
router.route('/api/v1/employee').post(createEmployee).get(getAllEmployees);
router.route('/api/v1/employee/:id').delete(deleteEmployee).get(getEmployeeById).put(updateEmployee);
router.route('/api/v1/employee/:id').put(updateEmployee);

export default router;
