import React from 'react'
import { UNIT } from '../../config'

const Keycap = ({ color, height, width, x, y }) => (
  <rect
    x={x * UNIT}
    y={y * UNIT}
    width={width * UNIT}
    height={height * UNIT}
    fill={color}
  />
)

export default Keycap
