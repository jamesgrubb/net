import React from "react"
import { PlayerButton } from "../playerButton"

export default ({ id, names, handleClick, ...rest }) => (
  <li key={id}>
    <PlayerButton onClick={handleClick} icon="play" {...rest} /> {names}
  </li>
)
