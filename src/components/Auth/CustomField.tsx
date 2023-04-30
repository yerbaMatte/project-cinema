import { Field } from 'formik';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { fieldType } from '../../types/auth-types';
import { DisplayError } from '../Auth/DisplayError';

export const CustomField = ({
  inputName,
  inputLabel,
}: {
  inputName: string;
  inputLabel: string;
}) => {
  return (
    <Field name={inputName}>
      {({ field, form }: fieldType) => (
        <FormControl
          id={inputName}
          isRequired
          isInvalid={form.errors[inputName] && form.touched[inputName]}
        >
          <FormLabel>{inputLabel}</FormLabel>
          <Input {...field} type={inputName} />
          <DisplayError
            invalidMessage={form.errors[inputName]}
            isInvalid={form.errors[inputName] && form.touched[inputName]}
          />
        </FormControl>
      )}
    </Field>
  );
};
