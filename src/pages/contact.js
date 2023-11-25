import React from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"
import ContactWrapper from "../styles/pages/contact"

const Contact = () => {
  return (
    <Layout isContact={true} isBlack={true} canGoBack={true}>
      <Head title="Contact" />
      <ContactWrapper>
        <a href="mailto:contact@bilalelkadhi.studio" traget="_blank">contact@bilalelkadhi.studio</a>
      </ContactWrapper>
    </Layout>
  )
}

export default Contact
