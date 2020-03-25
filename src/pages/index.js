import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import gsap from "gsap";
import Layout from "../components/Layout";
import Head from "../components/Head";
import IndexWrapper from "../styles/pages/home";
// import ReactPlayer from "react-player";
import { useRef } from "react";

const Index = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [hideLoading, setHideLoading] = useState(true);

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

  let loadingEl = useRef(null);
  let bilalText1 = useRef(null);
  let bilalText2 = useRef(null);
  let bilalText3 = useRef(null);
  let studioText = useRef(null);
  let blockText = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setHideLoading()
    });
    tl.to(
      bilalText1,
      {
        opacity: 1,
        duration: 0.6,
        ease: "Power3.inOut"
      },
      0.3
    )
      .from(bilalText2, {
        y: -100,
        opacity: 0,
        duration: 0.6,
        ease: "Power3.inOut"
      })
      .from(bilalText3, {
        opacity: 0,
        duration: 0.6,
        ease: "Power3.inOut"
      })
      .from(
        studioText,
        {
          opacity: 0,
          y: -20,
          duration: 0.8,
          ease: "Power3.inOut"
        },
        "+=0.5"
      )
      .to(
        blockText,
        {
          y: -30,
          opacity: 0,
          duration: 0.5,
          ease: "Power3.out"
        },
        "+=1"
      )
      .to(
        loadingEl,
        {
          opacity: 0,
          duration: 1,
          ease: "Power3.inOut"
        },
        "-=0.2"
      );
  }, []);

  return (
    <Layout isHome={true}>
      <Head title="Index" />
      {hideLoading && (
        <div
          ref={el => (loadingEl = el)}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 999,
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div ref={el => (blockText = el)}>
            <h1
              style={{
                fontFamily: "'Helvetica',sans-serif",
                color: "black",
                fontWeight: "bold"
              }}
            >
              <span style={{ opacity: "0" }} ref={el => (bilalText1 = el)}>
                BILAL
              </span>{" "}
              <span style={{ opacity: "0" }} ref={el => (bilalText2 = el)}>
                EL
              </span>{" "}
              <span style={{ opacity: "0" }} ref={el => (bilalText3 = el)}>
                KADHI
              </span>
            </h1>
            <h2
              ref={el => (studioText = el)}
              style={{ color: "black", textAlign: "center" }}
            >
              studio
            </h2>
          </div>
        </div>
      )}
      <IndexWrapper>
        <IndexWrapper.ImageWrapper
          image={data.contentfulHomeVideo.media.file.url}
        />

        {/* <ReactPlayer
          playsInline
          url={data.contentfulHomeVideo.media.file.url}
          loop
          playing={videoPlaying}
          muted
        /> */}
      </IndexWrapper>
    </Layout>
  );
};

export default Index;
