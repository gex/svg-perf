import React, { useMemo } from 'react'
import { graphql } from 'gatsby'
import calculateWidth from '../utils/calculateWidth'
import calculateHeight from '../utils/calculateHeight'
import findShapes from '../utils/findShapes'
import Layout from '../components/Layout'
import Svg from './symbol-mask-elements/Svg'
import Shape from './symbol-mask-elements/Shape'
import Keycap from './symbol-mask-elements/Keycap'

const SymbolMaskElementsAnimated = ({
  data: {
    keycaps: { nodes: keycaps }
  }
}) => {
  const width = useMemo(() => calculateWidth(keycaps), [keycaps])
  const height = useMemo(() => calculateHeight(keycaps), [keycaps])

  const shapes = useMemo(() => findShapes(keycaps), [keycaps])

  return (
    <Layout>
      <h1>Symbol and mask elements with animation</h1>
      <div className="animation">
        <Svg {...{ width, height }}>
          {shapes.map((shape) => (
            <Shape key={`shape-${shape.width}-${shape.height}`} {...shape} />
          ))}
          {keycaps.map((keycap) => (
            <Keycap key={`keycap-${keycap.x}-${keycap.y}`} {...keycap} />
          ))}
        </Svg>
      </div>
    </Layout>
  )
}

export default SymbolMaskElementsAnimated

export const query = graphql`
  query {
    keycaps: allKeycap {
      nodes {
        x
        y
        width
        height
        color
      }
    }
  }
`
