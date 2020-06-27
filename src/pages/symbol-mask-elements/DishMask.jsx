import React from 'react'
import { UNIT } from '../../config'
import getElementId from './getElementId'

const VISIBLE = 'white'
const INVISIBLE = 'black'

const DishMask = ({ height, width }) => (
  <mask
    id={getElementId('dish-mask', width, height)}
    x={0}
    y={0}
    width={width * UNIT}
    height={height * UNIT}
  >
    <use
      href={`#${getElementId('base-shape', width, height)}`}
      fill={VISIBLE}
    />
    <use
      href={`#${getElementId('dish-shape', width, height)}`}
      fill={INVISIBLE}
    />
  </mask>
)

export default DishMask
