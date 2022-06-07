import React, { useState } from 'react'
import * as Icons from '@heroicons/react/solid'
import { AnimatePresence, motion } from 'framer-motion'
import useMeasure from 'react-use-measure'

const Carousel = () => {
  let [count, setCount] = useState(1)
  let [tuple, setTuple] = useState([null, count])
  let [ref, { width }] = useMeasure()

  if (tuple[1] !== count) {
    setTuple([tuple[1], count])
  }

  console.log(images[Math.abs(count) % images.length])

  let prev = tuple[0]

  let direction = count > prev ? 1 : -1

  return (
    <div className="relative mx-auto my-3 h-screen w-screen  bg-gray-500 text-white">
      <div className="absolute inset-0 z-[2000] h-full w-full">
        <div className="mt-6 flex h-full items-center justify-between">
          <button
            className="rounded-full bg-sky-600/50"
            onClick={() => setCount(count - 1)}
          >
            <Icons.ChevronDoubleLeftIcon className="h-12 w-12" />
          </button>
          <button
            className="rounded-full bg-sky-600/50"
            onClick={() => setCount(count + 1)}
          >
            <Icons.ChevronDoubleRightIcon className="h-12 w-12" />
          </button>
        </div>
      </div>

      <div className="flex h-full items-center justify-center">
        <div
          ref={ref}
          className="relative flex h-full w-full  items-center justify-center overflow-hidden bg-gray-700/30"
        >
          <AnimatePresence custom={{ direction, width }}>
            <motion.div
              key={count}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={{ direction, width }}
              transition={{ duration: 0.6 }}
              className={`absolute flex h-full w-full items-center justify-center ${
                colors[Math.abs(count) % 6]
              }`}
            >
              <img
                className="z-[100] h-full w-full object-cover"
                src={images[Math.abs(count) % images.length]}
                alt={images[Math.abs(count) % images.length]}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default Carousel

let variants = {
  enter: ({ direction, width }) => ({ x: direction * width }),
  center: { x: 0 },
  exit: ({ direction, width }) => ({ x: direction * -width }),
}

let colors = [
  'bg-red-500',
  'bg-blue-500',
  'bg-green-500',
  'bg-sky-500',
  'bg-zinc-500',
  'bg-yellow-500',
]

let images = [
  '/images/laptop.jpeg',
  '/images/mac.jpeg',
  '/images/mobile.jpeg',
  '/images/screens.jpeg',
  '/images/table.jpeg',
  '/images/vr.jpeg',
]
