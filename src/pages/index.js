import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import IndexWrapper from "../styles/pages/home";
import ReactPlayer from "react-player";

const Index = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      contentfulHomeVideo {
        media {
          file {
            url
          }
        }
      }
    }
  `);

  return (
    <Layout isBlack>
      <IndexWrapper>
        <ReactPlayer
          url={data.contentfulHomeVideo.media.file.url}
          playing
          muted
        />
      </IndexWrapper>
    </Layout>
  );
};

export default Index;
