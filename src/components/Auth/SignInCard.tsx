import { Formik, Form, Field } from 'formik';
// Chakra UI
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { initialValues } from '../../Pages/SignInPage';
import { onSubmitHandler } from '../../Pages/SignInPage';
import { fieldType } from '../../components/Auth/authTypes';

export default function SignUpCard() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        {' '}
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign In</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              welcome back!
            </Text>
          </Stack>
          <Formik initialValues={initialValues} onSubmit={onSubmitHandler}>
            {({ isSubmitting }) => (
              <Form>
                <Field name="email">
                  {({ field }: fieldType) => (
                    <FormControl id="email">
                      <FormLabel>Email address</FormLabel>
                      <Input {...field} type="email" />
                    </FormControl>
                  )}
                </Field>
                <Field name="password">
                  {({ field }: fieldType) => (
                    <FormControl id="password">
                      <FormLabel>Password</FormLabel>
                      <InputGroup>
                        <Input
                          {...field}
                          type={showPassword ? 'text' : 'password'}
                        />
                        <InputRightElement h={'full'}>
                          <Button
                            variant={'ghost'}
                            onClick={() =>
                              setShowPassword((showPassword) => !showPassword)
                            }
                          >
                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                  )}
                </Field>
                <Stack spacing={10} pt={2}>
                  <Button
                    type="submit"
                    isLoading={isSubmitting}
                    loadingText="Submitting"
                    size="lg"
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}
                  >
                    Sign in
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Stack>
      </Flex>
    </>
  );
}
