import React from 'react'
import { UNIT } from '../../config'
import getElementId from './getElementId'

const Unit = ({ height, width }) => (
  <rect
    id={getElementId('unit', width, height)}
    x={0}
    y={0}
    width={width * UNIT}
    height={height * UNIT}
  />
)

export default Unit
