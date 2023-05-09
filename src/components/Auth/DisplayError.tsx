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
        <FormErrorMessage my={0.5}>{invalidMessage}</FormErrorMessage>
      ) : (
        <FormHelperText my={0.5}>‎ </FormHelperText>
      )}
    </>
  );
};
