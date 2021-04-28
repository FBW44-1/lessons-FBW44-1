import React from 'react';
import geezer from '../static/gb.png';
import { motion } from 'framer-motion';

function Geezer() {
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
    <div className='geezer'>
      <motion.img
        src={geezer}
        alt={geezer}
        initial='initial'
        animate='in'
        exit='out'
        variants={pageVariants}
      ></motion.img>{' '}
    </div>
  );
}

export default Geezer;
