import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Styles from "./index.module.scss"

// import { library } from "@fortawesome/fontawesome-svg-core"
// import { fab } from "@fortawesome/free-brands-svg-icons"
// import { fas } from "@fortawesome/free-solid-svg-icons"
// import { far } from "@fortawesome/free-regular-svg-icons"

const index = () => {
  // library.add(fab, fas, far)

  return (
    <>
      <Header />
      <main className={Styles.index}>
        <div className={Styles.container}>
          <h2 className={Styles.name}>
            I'm Daichi Sato,
            <br />
            a Web Front-End
            <br />
            Developer.
            <br />
            Welcome to My
            <br />
            Portfolio.
          </h2>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default index
