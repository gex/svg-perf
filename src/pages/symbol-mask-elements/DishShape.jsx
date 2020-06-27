import React from 'react'
import { DISH_SIZE as SIZE, DISH_RADIUS as RADIUS, UNIT } from '../../config'
import getElementId from './getElementId'

const DishShape = ({ height, width }) => {
  const offset = (UNIT - SIZE) / 2
  return (
    <rect
      id={getElementId('dish-shape', width, height)}
      x={offset}
      y={offset}
      width={width * UNIT - 2 * offset}
      height={height * UNIT - 2 * offset}
      rx={RADIUS}
    />
  )
}

export default DishShape
