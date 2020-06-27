import React from 'react'
import { UNIT } from '../../config'
import getMaskId from './getMaskId'
import Unit from './Unit'

const Keycap = ({ color, height, width, x, y }) => (
  <g transform={`translate(${x * UNIT} ${y * UNIT})`}>
    <Unit
      {...{ width, height }}
      fill={color}
      mask={`url(#${getMaskId('base', width, height)})`}
    />
    <Unit
      {...{ width, height }}
      fill="rgba(0, 0, 0, 0.15)"
      mask={`url(#${getMaskId('dish', width, height)})`}
    />
  </g>
)

export default Keycap
