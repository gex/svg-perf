import React, { Fragment, useMemo } from 'react'
import { graphql } from 'gatsby'
import calculateWidth from '../../utils/calculateWidth'
import calculateHeight from '../../utils/calculateHeight'
import findShapes from '../../utils/findShapes'
import Layout from '../../components/Layout'
import Svg from './Svg'
import BaseMask from './BaseMask'
import DishMask from './DishMask'
import Keycap from './Keycap'

const BasicLayout = ({
  data: {
    keycaps: { nodes: keycaps }
  }
}) => {
  const width = useMemo(() => calculateWidth(keycaps), [keycaps])
  const height = useMemo(() => calculateHeight(keycaps), [keycaps])

  const shapes = useMemo(() => findShapes(keycaps), [keycaps])

  return (
    <Layout>
      <h1>Basic Layout</h1>
      <Svg {...{ width, height }}>
        {shapes.map((shape) => (
          <Fragment key={`masks-${shape.width}-${shape.height}`}>
            <BaseMask {...shape} />
            <DishMask {...shape} />
          </Fragment>
        ))}
        {keycaps.map((keycap) => (
          <Keycap key={`keycap-${keycap.x}-${keycap.y}`} {...keycap} />
        ))}
      </Svg>
    </Layout>
  )
}

export default BasicLayout

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
