import React from 'react';
import { Formik, Form, setNestedObjectValues } from 'formik';
import { FormControl, FormLabel, Input, FormErrorMessage, Box, Button } from '@chakra-ui/core';
import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
    return (
        <Wrapper variant="small">
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <FormControl>
                            <InputField name="username" placeholder="Username" label="Username" />
                            <Box mt={4}>
                                <InputField name="password" placeholder="Password" label="Password" type="password" />
                            </Box>
                            <Button mt={4} type="submit" isLoading={isSubmitting} variantColor="teal">
                                Register
                            </Button>
                        </FormControl>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    );
};

export default Register;
