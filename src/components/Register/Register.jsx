import { useDispatch } from 'react-redux';

import { register } from '../../redux/auth/authOperations';


import styles from './Register.module.css';

const Register = () => {
  const { loginForm, label, input, btn } = styles;

  const dispatch = useDispatch();


  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const { name, email, password } = form.elements;
    
    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };

  const content = (
    <section>
      <h1>Register</h1>

      <form className={loginForm} onSubmit={handleSubmit}>
        <label className={label} htmlFor="username">
          Username
        </label>
        <input className={input} type="text" name="name" id="username" placeholder='Enter your name...' />
        <label className={label} htmlFor="email">
          Email
        </label>
        <input
          className={input}
          type="email"
          name="email"
          placeholder='Enter your email...'
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          autoComplete="email"
          id="email"
        />
        <label className={label} htmlFor="password">
          Password
        </label>
        <input
          className={input}
          type="password"
          id="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one uppercase and lowercase letter, one number and at least 8 or more characters"
          name="password"
          placeholder='Enter your password...'
        />

        <button className={btn} type="submit">
          Sign Up
        </button>
      </form>
    </section>
  );
  return content;
};

export default Register;
