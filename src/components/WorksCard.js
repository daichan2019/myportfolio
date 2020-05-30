import React from "react"
import Styles from "./WorksCard.module.scss"

const WorksCard = props => {
  return (
    <div className={Styles.worksCard}>
      <div className={Styles.cardTop}>
        <img src={props.src} className={Styles.cardImg} />
      </div>
      <div className={Styles.cardBottom}>
        <div className={Styles.textWrap}>
          <h3 className={Styles.title}>{props.title}</h3>
          <p className={Styles.text}>{props.text}</p>
          <p className={Styles.skill}>{props.skill}</p>
        </div>
      </div>
    </div>
  )
}

export default WorksCard
