import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Styles from "./SkillCard.module.scss"

const SkillCard = props => {
  return (
    <div className={Styles.skillCard}>
      <div className={Styles.skillCardTop}>
        <h3 className={Styles.title}>{props.language}</h3>
        <p className={Styles.iconWrap}>
          <FontAwesomeIcon
            className={Styles.icon}
            icon={props.icon}
            style={props.iconColor}
          />
        </p>
      </div>
      <div className={Styles.skillCardBottom}>
        <p className={Styles.year}>{props.year}</p>
        <p className={Styles.text}>{props.text}</p>
      </div>
    </div>
  )
}

export default SkillCard
