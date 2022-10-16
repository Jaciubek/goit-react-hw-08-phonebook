import styles from './Section.module.css';
import React from 'react';

const Section = ({ title, children }) => {
  const { sectionHead } = styles;

  return (
    <section>
      <h2 className={sectionHead}>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
