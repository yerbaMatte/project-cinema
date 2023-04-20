import { Formik, Form, Field } from 'formik';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react';
export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  type values = typeof initialValues;

  type fieldType = {
    field: {
      name: string;
      value: any;
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
      onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    };
  };

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
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features 🎥
            </Text>
          </Stack>
          <Formik
            initialValues={initialValues}
            onSubmit={(values: values, { setSubmitting }) => {
              console.log(values);
              // setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <HStack>
                  <Box>
                    <Field name='firstName'>
                      {({ field }: fieldType) => (
                        <FormControl id='firstName' isRequired>
                          <FormLabel>First Name</FormLabel>
                          <Input {...field} type='text' />
                        </FormControl>
                      )}
                    </Field>
                  </Box>
                  <Box>
                    <Field name='lastName'>
                      {({ field }: fieldType) => (
                        <FormControl id='lastName' isRequired>
                          <FormLabel>Last Name</FormLabel>
                          <Input {...field} type='text' />
                        </FormControl>
                      )}
                    </Field>
                  </Box>
                </HStack>
                <Field name='email'>
                  {({ field }: fieldType) => (
                    <FormControl id='email' isRequired>
                      <FormLabel>Email address</FormLabel>
                      <Input {...field} type='email' />
                    </FormControl>
                  )}
                </Field>
                <Field name='password'>
                  {({ field }: fieldType) => (
                    <FormControl id='password' isRequired>
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
                    Sign up
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={'center'}>
                    Already a user?{' '}
                    <Link to='/signin' color={'blue.400'}>
                      Login
                    </Link>
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
