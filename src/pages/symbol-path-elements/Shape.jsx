import React from 'react'
import { UNIT } from '../../config'
import getElementId from './getElementId'
import BasePath from './BasePath'
import DishPath from './DishPath'

const Shape = ({ height, width }) => (
  <symbol
    id={getElementId('shape', width, height)}
    viewBox={`0 0 ${width * UNIT} ${height * UNIT}`}
  >
    <BasePath {...{ width, height }} />
    <DishPath {...{ width, height }} fill="rgba(0, 0, 0, 0.15)" />
  </symbol>
)

export default Shape
