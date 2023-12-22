import './styles.css';

import React from 'react';
import useForm from '../hooks/useForm';
import validate from './../hooks/validate';

export default function LoginForm() {
  const { values, errors, submitting, handleChange, handleSubmit } = useForm({
    initialValues: { email: "", password: "" },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validate
  });

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label>
        Email:
        <br />
        <input 
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          className={errors.email && "errorInput"} 
        />
        <br />
        {errors.email && (<span className='errorMessage'>{errors.email}</span>)}
      </label>
      <br />
      <label>
        Password:
        <br />
        <input 
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          className={errors.email && "errorInput"} 
        />
        <br />
        {errors.password && (<span className='errorMessage'>{errors.password}</span>)}
      </label>
      <br />
      <button type='submit' disabled={submitting}>
        로그인
      </button>
    </form>
  );
}
