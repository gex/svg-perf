import React from 'react'
import { UNIT } from '../../config'
import getElementId from './getElementId'
import Unit from './Unit'
import BasePath from './BasePath'
import ClipPath from './ClipPath'
import DishPath from './DishPath'

const Shape = ({ height, width }) => (
  <symbol
    id={getElementId('shape', width, height)}
    viewBox={`0 0 ${width * UNIT} ${height * UNIT}`}
  >
    <defs>
      <Unit {...{ width, height }} />
      <BasePath {...{ width, height }} />
      <ClipPath {...{ width, height }} type="base" />
      <DishPath {...{ width, height }} />
      <ClipPath {...{ width, height }} type="dish" />
    </defs>
    <use
      clipPath={`url(#${getElementId('base-clip-path', width, height)})`}
      href={`#${getElementId('unit', width, height)}`}
    />
    <use
      clipPath={`url(#${getElementId('dish-clip-path', width, height)})`}
      href={`#${getElementId('unit', width, height)}`}
      fill="rgba(0, 0, 0, 0.15)"
    />
  </symbol>
)

export default Shape
