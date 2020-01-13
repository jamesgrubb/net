import React, { forwardRef } from "react"
import "./container.scss"

const Container = forwardRef((props, ref) => {
  return (
    <div className="container" containerRef={ref}>
      {props.children}
    </div>
  )
})

export default Container
