import React from 'react';
import band from '../static/bs.png';
import { motion } from 'framer-motion';

function Band() {
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
    <div className='band'>
      <motion.img
        src={band}
        alt={band}
        initial='initial'
        animate='in'
        exit='out'
        variants={pageVariants}
      ></motion.img>
    </div>
  );
}

export default Band;
