import React from 'react'
import { BASE_SIZE as SIZE, UNIT } from '../../config'

const Svg = ({ width, height, ...rest }) => {
  const offset = (UNIT - SIZE) / 2
  const svgWidth = width * UNIT + 2 * offset
  const svgHeight = height * UNIT + 2 * offset
  return (
    <svg
      {...rest}
      width={svgWidth}
      height={svgHeight}
      viewBox={`${-offset} ${-offset} ${svgWidth} ${svgHeight}`}
      xmlns="http://www.w3.org/2000/svg"
    />
  )
}

export default Svg
