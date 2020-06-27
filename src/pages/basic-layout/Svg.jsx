import React from 'react'
import { UNIT } from '../../config'

const Svg = ({ width, height, ...rest }) => (
  <svg
    {...rest}
    width={width * UNIT}
    height={height * UNIT}
    viewBox={`0 0 ${width * UNIT} ${height * UNIT}`}
    xmlns="http://www.w3.org/2000/svg"
  />
)

export default Svg
