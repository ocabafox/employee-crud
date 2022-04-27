import { Request, Response } from 'express';
import { date } from 'joi';
import EmployeeModel from '../../../models/Employee';

const createEmployee = async (req: Request, res: Response) => {
  const { name, time_in, time_out} = req.body;

  try {
    const newEmployee = new EmployeeModel({
      name,
      time_in,
      time_out,
      updated_at: new Date(),
      created_at: new Date()
    });
    await EmployeeModel.create(newEmployee);

    res.status(201).json({ status: 'success', msg: 'success create new employee' });
  } catch (error) {
    res.status(403).json({ status: 'error', msg: 'failed create new employee', errorMessage: error });
  }
};

export default createEmployee;
