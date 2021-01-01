import React from 'react'
import { motion } from 'framer-motion'

const Modal = ({ selectedImg, setSelectedImg }) => {
  const clickHandler = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="backdrop"
      onClick={(e) => clickHandler(e)}
    >
      <motion.img
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
        src={selectedImg}
        alt="Alt Image"
      />
    </motion.div>
  )
}

export default Modal
