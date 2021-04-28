import React from 'react';
import bill from '../static/bw.png';
import { motion } from 'framer-motion';

function Bill() {
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
    <div className='bill'>
      <motion.img
        src={bill}
        alt={bill}
        initial='initial'
        animate='in'
        exit='out'
        variants={pageVariants}
      ></motion.img>{' '}
    </div>
  );
}

export default Bill;
