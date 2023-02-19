import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import styles from './Login.module.css';

const Login = () => {
  const { loginForm, label, input, btn } = styles;

  const dispatch = useDispatch();
  const { error } = useAuth();
console.log( error);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { email, password } = form.elements;
    dispatch(
      logIn({
        email: email.value,
        password: password.value,
      })
    );
    !error && form.reset();
  };

  const content = (
    <section>
      <h1>Login</h1>
      <form className={loginForm} onSubmit={handleSubmit}>
        <label className={label} htmlFor="email">
          Email
        </label>
        <input
          className={input}
          type="email"
          name="email"
          id="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          autoComplete="email"
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
          autoComplete="password"
        />
        <button className={btn} type="submit">
          Log In
        </button>
      </form>
    </section>
  );
  return content;
};

export default Login;