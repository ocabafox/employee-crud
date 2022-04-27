import { Request, Response } from 'express';
import { date } from 'joi';
import EmployeeModel from '../../../models/Employee';
import Boom from 'boom';

const deleteEmployee = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedEmployee = await EmployeeModel.deleteOne({ _id: id });
    if (deletedEmployee.deletedCount < 1) {
      throw 'employee not found';
    }

    res.status(200).json({ status: 'success', msg: 'success delete employee' });
  } catch (error) {
    res.status(400).json({ status: 'error', msg: 'failed delete employee', errorMsg: error });
  }
};

export default deleteEmployee;
