import SignUpCard from '../Components/Auth/SignUpCard';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

type values = typeof initialValues;

export const SignUpPage = () => {
  return <SignUpCard />;
};
