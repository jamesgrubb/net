import React, { forwardRef } from "react"
import "./container.scss"

const Container = forwardRef((props, ref) => {
  return (
    <div className="container" ref={ref}>
      {props.children}
    </div>
  )
})

export default Container
