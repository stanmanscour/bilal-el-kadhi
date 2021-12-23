import React, { useEffect } from "react"
import "../../styles/index.scss"
import Header from "../Header"
import Footer from "../Footer"

import LayoutWrapper from "./elements"

const Layout = ({
  isBlack,
  isShy,
  headerContentTitle,
  canGoBack,
  footerChildren,
  children,
  isHome
}) => {

  useEffect(() => {
    let cookieStored = false
    let name = "password="
    let decodedCookie = decodeURIComponent(document.cookie)
    let ca = decodedCookie.split(';')
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) === ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) === 0) {
        cookieStored = true
      }
    }
    if (cookieStored) {
      const overlay = document.getElementById('overlay')
      overlay.classList.add('not-active')
    }
  }, [])

  const enter = e => {
    e.preventDefault()
    const password = document.getElementById('password')
    if (password.value === 'Bilal.2021!') {
      const overlay = document.getElementById('overlay')
      overlay.classList.add('not-active')
      const d = new Date()
      d.setTime(d.getTime() + (10*24*60*60*1000))
      let expires = "expires="+ d.toUTCString()
      document.cookie = "password=true;" + expires + ";path=/"
    }
  }

  return (
    <LayoutWrapper isBlack={isBlack}>
      <div id="overlay" className="password">
        <h2>Coming soon</h2>
        <form>
          <input type="text" id="password" required size="10" />
          <button type="button" onClick={enter}>
            Enter
          </button>
        </form>
      </div>
      <Header
        isShy={isShy}
        canGoBack={canGoBack}
      />
      {children}
      {<Footer isBlack={isBlack} canGoBack={canGoBack} children={footerChildren} />}
    </LayoutWrapper>
  )
}

Layout.defaultProps = {
  isBlack: false,
  isShy: false,
  headerChildren: null,
  footerChildren: null,
  children: null,
  isHome: false
}

export default Layout
