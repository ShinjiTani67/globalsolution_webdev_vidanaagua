import React from 'react'
import { Formik, Field, Form } from 'formik';

interface Values {
  username: string;
  password: string;
}

const login = () => {
  return (
    <div>
<Formik
            initialValues={{
                username: '',
                password: '',
            }}

            onSubmit={() => {

            }}
        >
            <Form>
                <Field id="username" name="username" placeholder="Username" />
                <Field type="password" id="password" name="password" placeholder="Password" />
                <button type="submit">Login</button>
            </Form>
        </Formik>
    </div>
  )
}

export default login
