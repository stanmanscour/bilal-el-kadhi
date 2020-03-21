import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import Head from "../components/Head";
import IndexWrapper from "../styles/pages/home";
import ReactPlayer from "react-player";

const Index = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    setVideoPlaying(true);
  }, []);

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
    <Layout>
      <Head title="Index" />
      <IndexWrapper>
        <ReactPlayer
          playsInline
          url={data.contentfulHomeVideo.media.file.url}
          loop
          playing={videoPlaying}
          muted
        />
      </IndexWrapper>
    </Layout>
  );
};

export default Index;
