import React from 'react'
import { DISH_SIZE as SIZE, DISH_RADIUS as RADIUS, UNIT } from '../../config'
import getElementId from './getElementId'
import { getPath } from './BasePath'

const DishPath = ({ height, width }) => {
  const offset = (UNIT - SIZE) / 2

  const path = [
    ...getPath(width, height),
    `M ${offset} ${height * UNIT - offset - RADIUS}`,
    `a ${RADIUS} ${RADIUS} 0 0 0 ${RADIUS} ${RADIUS}`,
    `h ${width * UNIT - 2 * offset - 2 * RADIUS}`,
    `a ${RADIUS} ${RADIUS} 0 0 0 ${RADIUS} ${-RADIUS}`,
    `v ${-height * UNIT + 2 * offset + 2 * RADIUS}`,
    `a ${RADIUS} ${RADIUS} 0 0 0 ${-RADIUS} ${-RADIUS}`,
    `h ${-width * UNIT + 2 * offset + 2 * RADIUS}`,
    `a ${RADIUS} ${RADIUS} 0 0 0 ${-RADIUS} ${RADIUS}`,
    'z'
  ]

  return (
    <path id={getElementId('dish-path', width, height)} d={path.join(' ')} />
  )
}

export default DishPath
