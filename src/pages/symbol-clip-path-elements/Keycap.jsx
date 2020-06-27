import React from 'react'
import { UNIT } from '../../config'
import getElementId from './getElementId'

const Keycap = ({ color, height, width, x, y }) => (
  <use
    href={`#${getElementId('shape', width, height)}`}
    x={x * UNIT}
    y={y * UNIT}
    width={width * UNIT}
    height={height * UNIT}
    fill={color}
  />
)

export default Keycap
