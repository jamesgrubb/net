import React from "react"
import "./playerButton.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ icon, text }) => (
  <div>
    <button className="player__button">
      {icon && <FontAwesomeIcon icon={icon} />}
      {text}
    </button>
  </div>
)
