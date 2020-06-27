import React, { useMemo } from 'react'
import { graphql } from 'gatsby'
import calculateWidth from '../../utils/calculateWidth'
import calculateHeight from '../../utils/calculateHeight'
import findShapes from '../../utils/findShapes'
import Layout from '../../components/Layout'
import Svg from './Svg'
import Shape from './Shape'
import Keycap from './Keycap'

const SymbolPathElements = ({
  data: {
    keycaps: { nodes: keycaps }
  }
}) => {
  const width = useMemo(() => calculateWidth(keycaps), [keycaps])
  const height = useMemo(() => calculateHeight(keycaps), [keycaps])

  const shapes = useMemo(() => findShapes(keycaps), [keycaps])

  return (
    <Layout>
      <h1>Symbol and path elements</h1>
      <Svg {...{ width, height }}>
        {shapes.map((shape) => (
          <Shape key={`shape-${shape.width}-${shape.height}`} {...shape} />
        ))}
        {keycaps.map((keycap) => (
          <Keycap key={`keycap-${keycap.x}-${keycap.y}`} {...keycap} />
        ))}
      </Svg>
    </Layout>
  )
}

export default SymbolPathElements

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
