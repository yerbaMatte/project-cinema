import { Formik, Form, Field, FormikHelpers } from 'formik';
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
import { fieldType, LogCred } from '../../types/auth-types';
import Yup from 'yup';
import { DisplayError } from '../Auth/DisplayError';

interface loginCredentials {
  email: string;
  password: string;
}

interface Props {
  initialValues: LogCred;
  logIn: (values: LogCred, actions: FormikHelpers<LogCred>) => void;
  validationSchema: Yup.ObjectSchema<loginCredentials>;
}

export default function SignInCard({ initialValues, logIn }: Props) {
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
          <Formik initialValues={initialValues} onSubmit={logIn}>
            {({ isSubmitting, status }) => (
              <Form noValidate>
                <Field name='email'>
                  {({ field, form }: fieldType) => (
                    <FormControl
                      id='email'
                      isRequired
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <FormLabel>Email address</FormLabel>
                      <Input {...field} type='email' />
                      <DisplayError
                        invalidMessage={form.errors.email}
                        isInvalid={form.errors.email && form.touched.email}
                      />
                    </FormControl>
                  )}
                </Field>
                <Field name='password'>
                  {({ field }: fieldType) => (
                    <FormControl id='password'>
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
                <Stack spacing={4} pt={6}>
                  <Button
                    type='submit'
                    isLoading={isSubmitting}
                    loadingText='Submitting'
                    size='lg'
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}
                  >
                    Sign in
                  </Button>
                  <Text align={'center'} color={'red'}>
                    {status}
                  </Text>
                </Stack>
              </Form>
            )}
          </Formik>
        </Stack>
      </Flex>
    </>
  );
}
