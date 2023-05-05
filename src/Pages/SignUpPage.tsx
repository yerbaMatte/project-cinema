import { SignUpCard } from '../Components/Auth/SignUpCard';
import { onSubmit as onSubmitHandler } from '../Services/firebase';
import { initialTypes } from '../types/auth-types';
import { signUpSchema } from '../Services/signUpSchema';

export const SignUpPage = () => {
  const initialValues: initialTypes = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  //TODO: add auto lgged in after singin up

  return (
    <SignUpCard
      onSubmitHandler={onSubmitHandler}
      initialValues={initialValues}
      validationSchema={signUpSchema}
    />
  );
};
