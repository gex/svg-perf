import React from 'react'
import { BASE_SIZE as SIZE, BASE_RADIUS as RADIUS, UNIT } from '../../config'

export const getPath = (width, height) => {
  const offset = (UNIT - SIZE) / 2
  return [
    `M ${offset} ${offset + RADIUS}`,
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

const BasePath = ({ height, width, ...rest }) => {
  const path = getPath(width, height)

  return <path {...rest} d={path.join(' ')} />
}

export default BasePath
