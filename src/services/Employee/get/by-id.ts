import { Request, Response } from 'express';
import { date } from 'joi';
import EmployeeModel from '../../../models/Employee';

const getEmployeeById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const employee = await EmployeeModel.findOne({ _id: id });

    if (!employee) {
      throw 'employee id is wrong';
    }

    res.status(200).json({ status: 'success', msg: 'success get detail employee', employee });
  } catch (error) {
    res.status(400).json({ status: 'error', msg: error });
  }
};

export default getEmployeeById;
