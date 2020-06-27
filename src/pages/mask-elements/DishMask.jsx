import React from 'react'
import { UNIT } from '../../config'
import getMaskId from './getMaskId'
import BaseShape from './BaseShape'
import DishShape from './DishShape'

const VISIBLE = 'white'
const INVISIBLE = 'black'

const DishMasks = ({ height, width }) => (
  <mask
    id={getMaskId('dish', width, height)}
    x={0}
    y={0}
    width={width * UNIT}
    height={height * UNIT}
  >
    <BaseShape {...{ width, height }} color={VISIBLE} />
    <DishShape {...{ width, height }} color={INVISIBLE} />
  </mask>
)

export default DishMasks
