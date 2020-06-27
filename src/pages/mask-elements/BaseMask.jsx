import React from 'react'
import { UNIT } from '../../config'
import getMaskId from './getMaskId'
import BaseShape from './BaseShape'

const VISIBLE = 'white'

const BaseMask = ({ height, width }) => (
  <mask
    id={getMaskId('base', width, height)}
    x={0}
    y={0}
    width={width * UNIT}
    height={height * UNIT}
  >
    <BaseShape {...{ width, height }} color={VISIBLE} />
  </mask>
)

export default BaseMask
