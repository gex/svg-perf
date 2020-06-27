import React from 'react'
import { DISH_SIZE as SIZE, DISH_RADIUS as RADIUS, UNIT } from '../../config'

const DishShape = ({ color, height, width }) => {
  const offset = (UNIT - SIZE) / 2
  return (
    <rect
      x={offset}
      y={offset}
      width={width * UNIT - 2 * offset}
      height={height * UNIT - 2 * offset}
      rx={RADIUS}
      fill={color}
    />
  )
}

export default DishShape
