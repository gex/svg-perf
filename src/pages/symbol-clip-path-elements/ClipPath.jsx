import React from 'react'
import getElementId from './getElementId'

const ClipPath = ({ height, type, width }) => (
  <clipPath id={getElementId(`${type}-clip-path`, width, height)}>
    <use href={`#${getElementId(`${type}-path`, width, height)}`} />
  </clipPath>
)

export default ClipPath
