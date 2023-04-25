export type fieldType = {
  field: {
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  };
  form: {
    errors: Record<string, boolean>;
    touched: Record<string, boolean>;
    initialValues: Record<string, string>;
    onSubmit: (values: Record<string, string>) => void;
    validate: (
      values: Record<string, string>
    ) => Record<string, string> | Promise<Record<string, string>>;
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

export interface initialTypes {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export type loginCred = Omit<initialTypes, 'firstName' | 'lastName'>;

//TODO: all types in the 'types' folder
