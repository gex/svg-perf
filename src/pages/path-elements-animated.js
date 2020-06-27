import React, { useMemo } from 'react'
import { graphql } from 'gatsby'
import calculateWidth from '../utils/calculateWidth'
import calculateHeight from '../utils/calculateHeight'
import Layout from '../components/Layout'
import Svg from './path-elements/Svg'
import Keycap from './path-elements/Keycap'

const PathElementsAnimated = ({
  data: {
    keycaps: { nodes: keycaps }
  }
}) => {
  const width = useMemo(() => calculateWidth(keycaps), [keycaps])
  const height = useMemo(() => calculateHeight(keycaps), [keycaps])

  return (
    <Layout>
      <h1>Path elements with animation</h1>
      <div className="animation">
        <Svg {...{ width, height }}>
          {keycaps.map((keycap) => (
            <Keycap key={`keycap-${keycap.x}-${keycap.y}`} {...keycap} />
          ))}
        </Svg>
      </div>
    </Layout>
  )
}

export default PathElementsAnimated

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
