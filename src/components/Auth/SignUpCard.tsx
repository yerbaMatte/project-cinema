import { Formik, Form, Field, ErrorMessage } from 'formik';
// Chakra UI
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
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { fieldType, initialTypes } from '../Auth/authTypes';
import { DisplayError } from './DisplayError';
import { CustomField } from './CustomField';
import Yup from 'yup';

export function SignUpCard({
  onSubmitHandler,
  initialValues,
  validationSchema,
}: {
  onSubmitHandler: (values: initialTypes, actions: any) => Promise<void>;
  initialValues: initialTypes;
  validationSchema: Yup.ObjectSchema<initialTypes>;
}) {
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
            {({ isSubmitting }) => (
              <Form noValidate>
                <HStack>
                  <Box>
                    <CustomField
                      inputName="firstName"
                      inputLabel="First Name"
                    />
                    {/* <Field name="firstName">
                      {({ field, form }: fieldType) => (
                        <FormControl
                          id="firstName"
                          isRequired
                          isInvalid={
                            form.errors.firstName && form.touched.firstName
                          }
                        >
                          <FormLabel>First Name</FormLabel>
                          <Input {...field} type="text" />
                          <DisplayError
                            invalidMessage={form.errors.firstName}
                            isInvalid={
                              form.errors.firstName && form.touched.firstName
                            }
                          />
                        </FormControl>
                      )}
                    </Field> */}
                  </Box>
                  <Box>
                    <Field name="lastName">
                      {({ field, form }: fieldType) => (
                        <FormControl
                          id="lastName"
                          isRequired
                          isInvalid={
                            form.errors.lastName && form.touched.lastName
                          }
                        >
                          <FormLabel>Last Name</FormLabel>
                          <Input {...field} type="text" />
                          <DisplayError
                            invalidMessage={form.errors.lastName}
                            isInvalid={
                              form.errors.lastName && form.touched.lastName
                            }
                          />
                        </FormControl>
                      )}
                    </Field>
                  </Box>
                </HStack>
                <Field name="email">
                  {({ field, form }: fieldType) => (
                    <FormControl
                      id="email"
                      isRequired
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <FormLabel>Email address</FormLabel>
                      <Input {...field} type="email" />
                      <DisplayError
                        invalidMessage={form.errors.email}
                        isInvalid={form.errors.email && form.touched.email}
                      />
                    </FormControl>
                  )}
                </Field>
                <Field name="password">
                  {({ field, form }: fieldType) => (
                    <FormControl
                      id="password"
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
                    Sign up
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={'center'}>
                    Already a user?{' '}
                    <Link color="#185bc7" as={ReachLink} to="/signin">
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
