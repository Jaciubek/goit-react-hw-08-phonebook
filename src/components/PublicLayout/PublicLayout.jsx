import styles from './PublicLayout.module.css';
import myPhoto from './avatar.jpg';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';

const PublicLayout = () => {
  const { heading, description, presentation, photo, linkedin, github, info } =
    styles;

  const content = (
    <section className="public">
      <h1 className={heading}>Hi it is Phonebook App</h1>
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
