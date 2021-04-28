import React from 'react';
import tony from '../static/ti.png';
import { motion } from 'framer-motion';

function Tony() {
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  return (
    <div className='tony'>
      <motion.img
        src={tony}
        alt={tony}
        initial='initial'
        animate='in'
        exit='out'
        variants={pageVariants}
      ></motion.img>
    </div>
  );
}

export default Tony;
