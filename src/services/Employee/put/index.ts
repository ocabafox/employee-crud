import { Request, Response } from 'express';
import { date } from 'joi';
import EmployeeModel from '../../../models/Employee';


const updateEmployee = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, status, time_in, time_out} = req.body;

  try {
    const updatedEmployee = await EmployeeModel.updateOne(
      { _id: id },
      {
        name,
        status,
        time_in,
        time_out,
        updated_at: new Date(),
      }
    );

    if (updatedEmployee.matchedCount < 1) {
      throw "Employee doesn't exist";
    }

    res.status(201).json({ status: 'success', msg: 'success update employee', updatedEmployee });
  } catch (error) {
    res.status(400).json({ status: 'error', msg: error });
  }
};

export default updateEmployee;
