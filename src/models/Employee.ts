import { Schema, model } from 'mongoose';
const Joi = require('joi');

import { EmployeeInterface } from '../interface';

const employeeSchema = new Schema<EmployeeInterface>({
  name: {
    type: String,
  },
  status: {
    type: String,
  },
  time_in: {
    type: String,
  },
  time_out: {
    type: String,
  },
  updated_at: {
    type: Date,
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

const EmployeeModel = model('employee', employeeSchema);
export default EmployeeModel;
