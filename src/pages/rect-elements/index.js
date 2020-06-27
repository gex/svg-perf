import React, { useMemo } from 'react'
import { graphql } from 'gatsby'
import calculateWidth from '../../utils/calculateWidth'
import calculateHeight from '../../utils/calculateHeight'
import Layout from '../../components/Layout'
import Svg from './Svg'
import Keycap from './Keycap'

const RectElements = ({
  data: {
    keycaps: { nodes: keycaps }
  }
}) => {
  const width = useMemo(() => calculateWidth(keycaps), [keycaps])
  const height = useMemo(() => calculateHeight(keycaps), [keycaps])

  return (
    <Layout>
      <h1>Rect elements</h1>
      <Svg {...{ width, height }}>
        {keycaps.map((keycap) => (
          <Keycap key={`${keycap.x}-${keycap.y}`} {...keycap} />
        ))}
      </Svg>
    </Layout>
  )
}

export default RectElements

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
