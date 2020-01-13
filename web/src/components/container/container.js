import React from "react"
import "./container.scss"

export default ({ containerRef, children }) => (
  <div className="container" ref={containerRef}>
    {children}
  </div>
)
