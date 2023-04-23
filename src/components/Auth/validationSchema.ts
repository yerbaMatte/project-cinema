import { string, object } from 'yup';

export const validationSchema = object().shape({
  firstName: string().required('Name is required'),
  lastName: string().required('Last name is required'),
  email: string().email('Invalid email').required('Email is required'),
  password: string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});
