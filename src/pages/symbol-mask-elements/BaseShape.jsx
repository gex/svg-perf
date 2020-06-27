import React from 'react'
import { BASE_SIZE as SIZE, BASE_RADIUS as RADIUS, UNIT } from '../../config'
import getElementId from './getElementId'

const BaseShape = ({ height, width }) => {
  const offset = (UNIT - SIZE) / 2
  return (
    <rect
      id={getElementId('base-shape', width, height)}
      x={offset}
      y={offset}
      width={width * UNIT - 2 * offset}
      height={height * UNIT - 2 * offset}
      rx={RADIUS}
    />
  )
}

export default BaseShape
