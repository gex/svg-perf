import React, { Fragment, useMemo } from 'react'
import { graphql } from 'gatsby'
import calculateWidth from '../utils/calculateWidth'
import calculateHeight from '../utils/calculateHeight'
import findShapes from '../utils/findShapes'
import Layout from '../components/Layout'
import Svg from './mask-elements/Svg'
import BaseMask from './mask-elements/BaseMask'
import DishMask from './mask-elements/DishMask'
import Keycap from './mask-elements/Keycap'

const MaskElementsAnimated = ({
  data: {
    keycaps: { nodes: keycaps }
  }
}) => {
  const width = useMemo(() => calculateWidth(keycaps), [keycaps])
  const height = useMemo(() => calculateHeight(keycaps), [keycaps])

  const shapes = useMemo(() => findShapes(keycaps), [keycaps])

  return (
    <Layout>
      <h1>Mask elements with animation</h1>
      <div className="animation">
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
      </div>
    </Layout>
  )
}

export default MaskElementsAnimated

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
