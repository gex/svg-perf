import React from 'react'
import { UNIT } from '../../config'

const Unit = ({ height, width, ...rest }) => (
  <rect {...rest} x={0} y={0} width={width * UNIT} height={height * UNIT} />
)

export default Unit
