import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SkillCard from "../components/SkillCard"
import Styles from "./about.module.scss"
import aboutLogo from "../images/about_logo.png"
import { library } from "@fortawesome/fontawesome-svg-core" //fontawesomeのコアファイル
import { fab } from "@fortawesome/free-brands-svg-icons" //fontawesomeのbrandアイコンのインポート
import { fas } from "@fortawesome/free-solid-svg-icons" //fontawesomeのsolidアイコンのインポート
import { far } from "@fortawesome/free-regular-svg-icons"

const About = () => {
  library.add(fab, fas, far)

  const html = {
    language: "HTML5",
    icon: ["fab", "html5"],
    year: "使用歴:1年",
    text:
      "適切なタグ付け、HTMLの記述順と表示されている情報の順番を合わせることを気をつけながらコーディングしています。",
  }

  const css = {
    language: "CSS3",
    icon: ["fab", "css3"],
    year: "使用歴:1年",
    text:
      "BEM,OOCSSなどのCSS設計を用いたコーディングが可能です。普段はSCSSを使っています。BootStrapでのコーディングもすることができます。",
  }

  const js = {
    language: "JavaScript(ES6)",
    icon: ["fab", "js-square"],
    year: "使用歴:6ヶ月",
    text:
      "Reactなどのフレームワークを学ぶ前に、jQueryでのUIの実装を学びました。ライブラリに依存しないスライドショーの実装をすることができます。",
  }
  const react = {
    language: "React",
    icon: ["fab", "react"],
    year: "使用歴:2ヶ月",
    text:
      "Hooksを使ったシンプルなアプリケーションを開発することができます。Reduxを用いた複雑な状態管理に関しては勉強中です。",
  }

  return (
    <>
      <Header />
      <div className={Styles.about}>
        <div className="container">
          <div className={Styles.aboutWrap}>
            <h2 className="subhead">About Me</h2>
            <div className={Styles.authorWrap}>
              <div className={Styles.imgWrap}>
                <img src={aboutLogo} alt="Daichi Sato" />
              </div>
              <div className={Styles.textWrap}>
                <ul className={Styles.myInfo}>
                  <li className={Styles.myInfoItem}>Name: 佐藤大地</li>
                  <li className={Styles.myInfoItem}>
                    University: 新潟大学経済学部
                  </li>
                  <li className={Styles.myInfoItem}>Birthday: 1996/2/28</li>
                </ul>
                <p className={Styles.career}>
                  2018年4月から新卒で食品スーパーマーケットに入社し、2019年6月まで働きました。
                  <br />
                  WordPressでブログを書いていたが、プログラミングに興味を持ち、2018年8月から学習を開始しました。
                  <br />
                  直接ユーザーが触れるWebフロントエンドに魅かれ、HTML/CSSやJavaScript(jQuery)のアウトプットからはじめました。
                  <br />
                  JSフレームワークを用いたUI設計ができるようになりたくて、2019年4月からReactに着手。
                </p>
              </div>
            </div>
          </div>
          <div className={Styles.skillWrap}>
            <h2 className="subhead">SKILL</h2>
            <div className={Styles.cardWrap}>
              <SkillCard
                language={html.language}
                icon={html.icon}
                year={html.year}
                text={html.text}
                iconColor={{ color: "#F16529" }}
              />
              <SkillCard
                language={css.language}
                icon={css.icon}
                year={css.year}
                text={css.text}
                iconColor={{ color: "#00A0DC" }}
              />
              <SkillCard
                language={js.language}
                icon={js.icon}
                year={js.year}
                text={js.text}
                iconColor={{ color: "#F0DB4F" }}
              />
              <SkillCard
                language={react.language}
                icon={react.icon}
                year={react.year}
                text={react.text}
                iconColor={{ color: "#61DBFB" }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
