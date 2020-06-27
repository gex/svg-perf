import React from 'react'
import { UNIT } from '../../config'
import getElementId from './getElementId'

const VISIBLE = 'white'

const BaseMask = ({ height, width }) => (
  <mask
    id={getElementId('base-mask', width, height)}
    x={0}
    y={0}
    width={width * UNIT}
    height={height * UNIT}
  >
    <use
      href={`#${getElementId('base-shape', width, height)}`}
      fill={VISIBLE}
    />
  </mask>
)

export default BaseMask
