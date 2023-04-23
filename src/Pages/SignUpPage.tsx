import { SignUpCard } from '../components/Auth/SignUpCard';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';
import { initialTypes, FormikActions } from '../components/Auth/authTypes';
import { validationSchema } from '../components/Auth/validationSchema';

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

  return (
    <SignUpCard
      onSubmitHandler={onSubmitHandler}
      initialValues={initialValues}
      validationSchema={validationSchema}
    />
  );
};
