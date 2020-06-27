import React, { useMemo } from 'react'
import { graphql } from 'gatsby'
import calculateWidth from '../utils/calculateWidth'
import calculateHeight from '../utils/calculateHeight'
import findShapes from '../utils/findShapes'
import Layout from '../components/Layout'
import Svg from './symbol-clip-path-elements/Svg'
import Shape from './symbol-clip-path-elements/Shape'
import Keycap from './symbol-clip-path-elements/Keycap'

const SymbolClipPathElementsAnimated = ({
  data: {
    keycaps: { nodes: keycaps }
  }
}) => {
  const width = useMemo(() => calculateWidth(keycaps), [keycaps])
  const height = useMemo(() => calculateHeight(keycaps), [keycaps])

  const shapes = useMemo(() => findShapes(keycaps), [keycaps])

  return (
    <Layout>
      <h1>Symbol and clip path elements with animation</h1>
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

export default SymbolClipPathElementsAnimated

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
