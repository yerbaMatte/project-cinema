export type fieldType = {
  field: {
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  };
};

export type FormikActions = {
  setSubmitting: (isSubmitting: boolean) => void;
  setErrors: (errors: Record<string, string>) => void;
  setStatus: (status: any) => void;
  setValues: (values: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => void;
  setTouched: (touched: Record<string, boolean>) => void;
};

export type initialTypes = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
