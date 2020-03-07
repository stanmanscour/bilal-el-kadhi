import React from "react";
import { graphql } from "gatsby";
import Head from "../components/Head";
import Layout from "../components/Layout";
import PrintWrapper from "../styles/pages/print";

export const query = graphql`
  query($slug: String!) {
    contentfulPrint(slug: { eq: $slug }) {
      title
      media {
        file {
          url
        }
      }
    }
  }
`;

const Print = props => {
  const print = props.data.contentfulPrint;
  return (
    <Layout isShy={true} canGoBack={true} headerContentTitle={print.title}>
      <Head title={print.title} />
      <PrintWrapper>
        <img src={print.media.file.url} />
      </PrintWrapper>
    </Layout>
  );
};

export default Print;
