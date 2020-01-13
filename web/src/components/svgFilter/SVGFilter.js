import React from "react"
import "./filter.scss"
export default () => (
  <svg class="filter" width="100%" height="100%" viewBox="0 0 100  100">
    <filter id="duotone">
      <feColorMatrix
        type="matrix"
        values=".33 .33 .33 0 0
                .33 .33 .33 0 0
                .33 .33 .33 0 0
                 0   0   0  1 0"
      ></feColorMatrix>

      <feComponentTransfer color-interpolation-filters="sRGB">
        <feFuncR type="table" tableValues=".521568627  1"></feFuncR>
        <feFuncG type="table" tableValues=".5607843137  1"></feFuncG>
        <feFuncB type="table" tableValues=".639215686  1"></feFuncB>
      </feComponentTransfer>
    </filter>
  </svg>
)
