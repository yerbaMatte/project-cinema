import { FormHelperText, FormErrorMessage } from '@chakra-ui/react';

export const DisplayError = ({
  invalidMessage,
  isInvalid,
}: {
  invalidMessage: boolean;
  isInvalid: boolean;
}) => {
  return (
    <>
      {isInvalid ? (
        <FormErrorMessage my={1}>{invalidMessage}</FormErrorMessage>
      ) : (
        <FormHelperText my={1}>‎ </FormHelperText>
      )}
    </>
  );
};
