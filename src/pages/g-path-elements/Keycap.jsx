import React from 'react'
import { UNIT } from '../../config'
import BasePath from './BasePath'
import DishPath from './DishPath'

const Keycap = ({ color, height, width, x, y }) => (
  <g transform={`translate(${x * UNIT} ${y * UNIT})`}>
    <BasePath {...{ width, height }} fill={color} />
    <DishPath {...{ width, height }} fill="rgba(0, 0, 0, 0.15)" />
  </g>
)

export default Keycap
