import React from 'react';
import ozzy from '../static/oo.png';
import { motion } from 'framer-motion';

function Ozzy() {
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
    <div className='ozzy'>
      <motion.img
        src={ozzy}
        alt={ozzy}
        initial='initial'
        animate='in'
        exit='out'
        variants={pageVariants}
      ></motion.img>{' '}
    </div>
  );
}

export default Ozzy;
