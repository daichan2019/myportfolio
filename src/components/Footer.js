import React from "react"
import Styles from "./Footer.module.scss"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import gatsbyLogo from "../images/gatsby_logo.svg"

const Footer = () => {
  library.add(fab, fas, far)

  return (
    <footer className={Styles.footer}>
      <div className={Styles.inner}>
        <div className={Styles.footerItem}>
          <p className={Styles.text}>This website built with:</p>
          <ul className={Styles.iconList}>
            <li className={Styles.iconListItem}>
              <FontAwesomeIcon
                className={`${Styles.icon} ${Styles.js}`}
                icon={["fab", "js-square"]}
              />
            </li>
            <li className={Styles.iconListItem}>
              <FontAwesomeIcon
                className={`${Styles.icon} ${Styles.react}`}
                icon={["fab", "react"]}
              />
            </li>
            <li className={Styles.iconListItem}>
              <img
                className={`${Styles.icon} ${Styles.gatsby}`}
                src={gatsbyLogo}
                alt="gatsbyLogo"
              />
            </li>
            <li className={Styles.iconListItem}>
              <FontAwesomeIcon
                className={`${Styles.icon} ${Styles.sass}`}
                icon={["fab", "sass"]}
              />
            </li>
          </ul>
          <p className={Styles.copyright}>
            <small>Copyright©Daichi Sato. All Rights Reserved.</small>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
