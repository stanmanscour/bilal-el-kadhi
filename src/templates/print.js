import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
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
      <PrintWrapper>
        <img src={print.media.file.url} />
      </PrintWrapper>
    </Layout>
  );
};

export default Print;
