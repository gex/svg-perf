import React from 'react'
import BasePath from './BasePath'
import DishPath from './DishPath'

const Keycap = ({ color, height, width, x, y }) => (
  <>
    <BasePath {...{ x, y, width, height }} fill={color} />
    <DishPath {...{ x, y, width, height }} fill="rgba(0, 0, 0, 0.15)" />
  </>
)

export default Keycap
