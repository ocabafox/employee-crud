import { Request, Response } from 'express';
import { date } from 'joi';
import EmployeeModel from '../../../models/Employee';

const getAllEmployees = async (req: Request, res: Response) => {
  const limit: any = req.query.limit;
  const page: any = req.query.page;

  const offset: number = (parseInt(page) - 1) * parseInt(limit);

  try {
    const employees = await EmployeeModel.find().limit(parseInt(limit)).skip(offset);

    res.status(200).json({ status: 'success', msg: 'List of employees', employees });
  } catch (error) {
    res.status(400).json({ status: 'error', msg: error });
  }
};

export default getAllEmployees;
