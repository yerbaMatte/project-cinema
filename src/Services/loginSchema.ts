import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

type errorCode = string;

export const mapFirebaseAuthErrorsToMessages = (errorCode: errorCode) => {
  switch (errorCode) {
    case 'auth/user-not-found':
      return 'User not found';
    case 'auth/wrong-password':
      return 'Incorrect password';
    case 'auth/too-many-requests':
      return 'Too many unsuccessful login attempts. Please try again later.';
    default:
      return 'An error occurred. Please try again.';
  }
};
