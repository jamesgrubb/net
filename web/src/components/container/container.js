import React, { forwardRef, useRef, useEffect } from "react"
import "./container.scss"

const Container = forwardRef((props, ref) => {
  const cnvRef = useRef()
  console.log(cnvRef.current)
  const rAF = useRef()
  useEffect(() => {
    const ctx = cnvRef.current.getContext("2d")

    const loop = () => {
      rAF.current = requestAnimationFrame(loop)
      let n = 10
      ctx.fillRect(0, 0, 100, 100)
    }
    loop()
    return () => cancelAnimationFrame(rAF.current)
  })
  return (
    <div className="container" ref={ref}>
      {props.children}
      <canvas className="canvas" ref={cnvRef} />
    </div>
  )
})

export default Container
