import React from 'react';
import { RotatingTriangles } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  const { item } = styles;
  
  return (
    <div className={item}>
      <RotatingTriangles
          visible={true}
          height="150"
          width="150"
          ariaLabel="rotating-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={['#1B5299', '#EF8354', '#DB5461']}
        />
    </div>
  );
};

export default Loader;