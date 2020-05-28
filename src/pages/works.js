import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import WorksCard from "../components/WorksCard"
import Styles from "./works.module.scss"

import isara from "../images/isara.life模写制作LP.png"
import myportfolio from "../images/myportfolio.png"

const works = () => {
  const works1 = {
    title: "isara.life模写制作LP",
    text:
      "模写制作としてisara.lifeのHPを模写しました。HTML,SCSSのアウトプットとして制作しました。",
    skill: "HTML/SCSS",
  }

  const works2 = {
    title: "Portfolioサイト",
    text:
      "ReactのアウトプットとしてGatsby.jsを用いて制作しました。コンポーネント化とpropsで値を渡すなど基礎の基礎は実装できました。",
    skill: "React/Gatsby.js/SCSS",
  }

  return (
    <>
      <Header />
      <div className={Styles.works}>
        <div className="container">
          <div className={Styles.worksWrap}>
            <h2 className="subhead">Works</h2>
            <div className={Styles.cardWrap}>
              <a
                className={Styles.cardLink}
                href="https://github.com/daichan2019/iSara_sass"
                target="_blank"
              >
                <WorksCard
                  src={isara}
                  title={works1.title}
                  text={works1.text}
                  skill={works1.skill}
                />
              </a>
              <a className={Styles.cardLink} href="/">
                <WorksCard
                  src={myportfolio}
                  title={works2.title}
                  text={works2.text}
                  skill={works2.skill}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default works
