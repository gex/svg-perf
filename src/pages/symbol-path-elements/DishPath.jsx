import React from 'react'
import { DISH_SIZE as SIZE, DISH_RADIUS as RADIUS, UNIT } from '../../config'
import { getPath as getBasePath } from './BasePath'

export const getPath = (width, height) => {
  const offset = (UNIT - SIZE) / 2
  return [
    ...getBasePath(width, height),
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
}

const DishPath = ({ height, width, ...rest }) => {
  const path = getPath(width, height)

  return <path {...rest} d={path.join(' ')} />
}

export default DishPath
