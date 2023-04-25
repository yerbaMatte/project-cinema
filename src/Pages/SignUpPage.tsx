import { SignUpCard } from '../Components/Auth/SignUpCard';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';
import { initialTypes, FormikActions } from '../Components/Auth/authTypes';
import { validationSchema } from '../Components/Auth/validationSchema';

export const SignUpPage = () => {
  const initialValues: initialTypes = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  async function onSubmitHandler(
    { firstName, lastName, email, password }: initialTypes,
    actions: FormikActions
  ) {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(user, { displayName: `${firstName} ${lastName}` });

    console.log(user);

    actions.setSubmitting(false);
  }

  //TODO: add auto lgged in after singin up

  return (
    <SignUpCard
      onSubmitHandler={onSubmitHandler}
      initialValues={initialValues}
      validationSchema={validationSchema}
    />
  );
};

// JEST test

export default PrivateRoute(SignUpPage);
