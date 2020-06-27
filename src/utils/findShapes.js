const findShapes = (keycaps) =>
  keycaps
    .map((keycap) => ({ width: keycap.width, height: keycap.height }))
    .filter(
      (shape, index, shapes) =>
        shapes.findIndex(
          ({ height, width }) =>
            width === shape.width && height === shape.height
        ) === index
    )

export default findShapes
