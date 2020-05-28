import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Styles from "./contact.module.scss"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const contact = () => {
  library.add(fab, fas, far)

  return (
    <>
      <Header />
      <div className={Styles.contact}>
        <div className="container">
          <div className={Styles.contactWrap}>
            <h2 className="subhead">Contact</h2>
            <ul className={Styles.iconList}>
              <li className={Styles.iconListItem}>
                <a
                  className={Styles.iconLink}
                  href="https://github.com/daichan2019"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className={`${Styles.icon} ${Styles.github}`}
                    icon={["fab", "github"]}
                  />
                </a>
              </li>
              <li className={Styles.iconListItem}>
                <a
                  className={Styles.iconLink}
                  href="https://twitter.com/explore"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className={`${Styles.icon} ${Styles.twitter}`}
                    icon={["fab", "twitter"]}
                  />
                </a>
              </li>
              <li className={Styles.iconListItem}>
                <a
                  className={Styles.iconLink}
                  href="https://www.instagram.com/frate28/?hl=ja"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className={`${Styles.icon} ${Styles.instagram}`}
                    icon={["fab", "instagram-square"]}
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className={Styles.mailWrap}>
            <h2 className="subhead">Mail</h2>
            <address className={Styles.address}>
              daichiexperience@gmail.com
            </address>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default contact
