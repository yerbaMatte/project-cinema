import { Formik, Form, Field, FormikHelpers } from 'formik';
import {
  Link,
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
import { Link as ReachLink } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { fieldType, initialTypes } from '../../types/auth-types';
import { DisplayError } from './DisplayError';
import { CustomField } from './CustomField';
import Yup from 'yup';

interface Props {
  onSubmitHandler: (
    values: initialTypes,
    actions: FormikHelpers<initialTypes>
  ) => void;
  initialValues: initialTypes;
  validationSchema: Yup.ObjectSchema<initialTypes>;
}

export default function SignUpContent({
  onSubmitHandler,
  initialValues,
  validationSchema,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign Up</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features 🎥
            </Text>
          </Stack>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmitHandler}
            validationSchema={validationSchema}
          >
            {({ isSubmitting, status }) => (
              <Form noValidate>
                <HStack>
                  <Box>
                    <CustomField
                      inputName='firstName'
                      inputLabel='First Name'
                    />
                  </Box>
                  <Box>
                    <CustomField inputName='lastName' inputLabel='Last Name' />
                  </Box>
                </HStack>
                <CustomField inputName='email' inputLabel='Email address' />
                <Field name='password'>
                  {({ field, form }: fieldType) => (
                    <FormControl
                      id='password'
                      isRequired
                      isInvalid={form.errors.password && form.touched.password}
                    >
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
                      <DisplayError
                        invalidMessage={form.errors.password}
                        isInvalid={
                          form.errors.password && form.touched.password
                        }
                      />
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
                    <Link color='#185bc7' as={ReachLink} to='/signin'>
                      Login
                    </Link>
                  </Text>
                  {status && (
                    <Text align={'center'} color={'red'}>
                      {status}
                    </Text>
                  )}
                </Stack>
              </Form>
            )}
          </Formik>
        </Stack>
      </Flex>
    </>
  );
}
