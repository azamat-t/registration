import Yup from 'yup';
import { MIN_PASSWORD_LENGTH } from './const';

export default function getYupValidationSchema(values) {
  return Yup.object().shape({
    name: Yup.string()
      .required('Name is required'),
    password: Yup.string()
      .min(MIN_PASSWORD_LENGTH, `Password has to be longer than ${MIN_PASSWORD_LENGTH} characters!`)
      .required('Password is required'),
    // age: Yup.number()
    //   .typeError('Age must be a number')
  }) 
}