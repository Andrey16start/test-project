import React, { useState } from 'react';
import { Form } from 'react-final-form';

import useDidMount from '../../hooks/useDidMount';

import './LoginPage.scss';
import Spinner from '../../components/Spinner/Spinner';
import FormField from '../../components/FormField/FormField';


const LoginPage = (props) => {
  const [isPending, setPending] = useState(true);

  const [serverErrors, setServerErrors] = useState({});

  useDidMount(() => {
    if (localStorage.isLoggedIn) {
      props.history.push('/');
    }
    else {
      setPending(false);
    }
  });

  const onSubmit = (values) => {
    const { username, password } = values;

    if (username === 'Admin' && password === '12345') {
      localStorage.isLoggedIn = true;
      window.location = '/';
    }
    else {
      setServerErrors({
        username: ['Имя пользователя или пароль введены не верно'],
      })
    }
  };

  if (isPending) {
    return (
      <div className="login__pending-wrap">
        <Spinner spinnerSize={50} />
      </div>
    )
  }

  return (
    <div className="login card">
      <h1 className='login__title'>Log In To Application</h1>

      <Form
        onSubmit={onSubmit}
        initialValues={{
          username: '',
          password: '',
        }}
        validate={validate}
      >
        {({ handleSubmit, valid }) => (
          <form onSubmit={handleSubmit}>
            <FormField
              className='input'
              serverErrors={serverErrors}
              name='username'
              placeholderText='Username'
              setServerErrors={setServerErrors}
              isShowLabel
              labelText='Username'
            />

            <FormField
              className='input'
              serverErrors={serverErrors}
              name='password'
              placeholderText='Password'
              setServerErrors={setServerErrors}
              isShowLabel
              labelText='Password'
              type='password'
            />

            <button
              className='btn btn--primary'
              disabled={!valid || isPending}
            >
              {isPending
                ? (
                  <Spinner spinnerSize={30} />
                )
                : 'Log In'
              }
            </button>
          </form>
        )}
      </Form>
    </div>
  )
}

const validate = ({ username, password }) => {
  const errors = {};

  if (!username || !username.trim().length) {
    errors.username = 'Enter username';
  }
  if (!password || !password.trim().length) {
    errors.password = 'Enter the password';
  }
  return errors;
};

export default LoginPage;