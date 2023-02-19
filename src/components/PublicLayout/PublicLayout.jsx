import styles from './PublicLayout.module.css';
import myPhoto from './avatar.jpg';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import { useAuth } from 'hooks';

const PublicLayout = () => {
  const { heading, description, presentation, photo, linkedin, github, info, demo } =
    styles;
  
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useAuth();
  const logInDemoUser = () => {
   dispatch(
      logIn({
        email: "demo@user.com",
        password: "Demo12345",
      })
    );
}

  const content = (
    <section className="public">
      <h1 className={heading}>
        Hi <span>{isLoggedIn ? `${String(user.name)} ` : ''}</span>
        it is my Phonebook App
      </h1>
      <p className={description}>
        This application was created during the GoIT programming course "Full Stack Developer od zera". Please
        register for start.
        <a
          className={github}
          href="https://github.com/jaciubek/goit-react-hw-08-phonebook"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoGithub />
          Application code
        </a>
      </p>

      {!isLoggedIn && (
        <button
          className={demo}
          onClick={() => logInDemoUser()}
        >
          Login as demo user
        </button>
      )}

      <div className={presentation}>
        <div>
          <a
            className={linkedin}
            href="https://pl.linkedin.com/in/przyk%C5%82adowy-profil-872285ab"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoLinkedin />
            <img
              className={photo}
              src={myPhoto}
              alt="The creator of the application"
            />
          </a>
        </div>
        <div className={info}>
          <p className={description}>
            Welcome all, I'm Slawek and I'm fullstack developer student.
          </p>
        </div>
      </div>
    </section>
  );
  return content;
};
export default PublicLayout;
