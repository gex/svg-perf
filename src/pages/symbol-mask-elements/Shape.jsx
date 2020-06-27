import React from 'react'
import { UNIT } from '../../config'
import getElementId from './getElementId'
import BaseShape from './BaseShape'
import DishShape from './DishShape'
import BaseMask from './BaseMask'
import DishMask from './DishMask'
import Unit from './Unit'

const Shape = ({ height, width }) => (
  <symbol
    id={getElementId('shape', width, height)}
    viewBox={`0 0 ${width * UNIT} ${height * UNIT}`}
  >
    <defs>
      <BaseShape {...{ width, height }} />
      <DishShape {...{ width, height }} />
      <BaseMask {...{ width, height }} />
      <DishMask {...{ width, height }} />
    </defs>
    <Unit
      {...{ width, height }}
      mask={`url(#${getElementId('base-mask', width, height)})`}
    />
    <Unit
      {...{ width, height }}
      mask={`url(#${getElementId('dish-mask', width, height)})`}
      fill="rgba(0, 0, 0, 0.15)"
    />
  </symbol>
)

export default Shape
