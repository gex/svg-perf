import React from 'react'
import { BASE_SIZE as SIZE, BASE_RADIUS as RADIUS, UNIT } from '../../config'

const BaseShape = ({ color, height, width }) => {
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

export default BaseShape
