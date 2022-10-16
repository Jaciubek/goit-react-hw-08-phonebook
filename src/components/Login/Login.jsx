import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import styles from './Login.module.css';

const Login = () => {
  const { loginForm, label, input, btn } = styles;

  const dispatch = useDispatch();

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
    form.reset();
  };

  const content = (
    <section>
      <h1>Login</h1>

      <form className={loginForm} onSubmit={handleSubmit}>
        <label className={label} htmlFor="email" placeholder='Enter your email...'>
          Email
        </label>
        <input className={input} type="email" id="email" placeholder='Enter your email...' />

        <label className={label} htmlFor="password" placeholder='Enter your password...'>
          Password
        </label>
        <input className={input} type="password" id="password" placeholder='Enter your password...' />
        <button className={btn} type="submit">
          Sign In
        </button>
      </form>
    </section>
  );
  return content;
};

export default Login;
