import React from 'react'
import { BASE_SIZE as SIZE, BASE_RADIUS as RADIUS, UNIT } from '../../config'

export const getPath = (offsetX, width, offsetY, height) => {
  const offset = (UNIT - SIZE) / 2
  return [
    `M ${offsetX + offset} ${offsetY + offset + RADIUS}`,
    `a ${RADIUS} ${RADIUS} 0 0 1 ${RADIUS} ${-RADIUS}`,
    `h ${width * UNIT - 2 * offset - 2 * RADIUS}`,
    `a ${RADIUS} ${RADIUS} 0 0 1 ${RADIUS} ${RADIUS}`,
    `v ${height * UNIT - 2 * offset - 2 * RADIUS}`,
    `a ${RADIUS} ${RADIUS} 0 0 1 ${-RADIUS} ${RADIUS}`,
    `h ${-width * UNIT + 2 * offset + 2 * RADIUS}`,
    `a ${RADIUS} ${RADIUS} 0 0 1 ${-RADIUS} ${-RADIUS}`,
    'z'
  ]
}

const BasePath = ({ height, width, x, y, ...rest }) => {
  const path = getPath(x * UNIT, width, y * UNIT, height)

  return <path {...rest} d={path.join(' ')} />
}

export default BasePath
