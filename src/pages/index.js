import React from "react";
import Layout from "../components/Layout/Layout";
import Player from "../components/Player";
import IndexWrapper from "../styles/pages/home";
import ReactPlayer from "react-player";

const Index = () => {
  const video =
    "//videos.ctfassets.net/8zndjzj2z4fu/6tQ4PLMTYF3SfZQErQEorY/3933616ce48d5b3cc7ece4f368ee883c/y2mate.com_-_LAYLOW_-_POIZON_b3LdIMB7RnI_1080p.mp4";

  return (
    <Layout isBlack>
      <IndexWrapper>
        <ReactPlayer url={video} playing muted />
      </IndexWrapper>
    </Layout>
  );
};

export default Index;
