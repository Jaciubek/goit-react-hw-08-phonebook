import styles from './Section.module.css';
import React from 'react';
import PropTypes from 'prop-types';

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
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};