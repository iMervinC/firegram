import React from 'react'
import useFirestore from '../hooks/useFirestore'
import { motion } from 'framer-motion'

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images')

  const clickHandler = (url) => {
    setSelectedImg(url)
  }

  return (
    <div className="img-grid">
      {docs &&
        docs.map((x) => (
          <motion.div
            whileHover={{ opacity: 1 }}
            layout
            onClick={() => clickHandler(x.url)}
            className="img-wrap"
            key={x.id}
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              src={x.url}
              alt={x.id}
            />
          </motion.div>
        ))}
    </div>
  )
}

export default ImageGrid
