import React, { useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Layout from "../components/Layout";
import Player from "../components/Player";
import FilmsWrapper from "../styles/pages/films";

const Films = () => {
  const [currentTrailer, setCurrentTrailer] = useState(0);
  const showCurrentTrailer = arg => {
    setCurrentTrailer(arg);
  };

  const handleHover = e => {};

  const handleHoverExit = e => {};

  const data = useStaticQuery(graphql`
    query {
      allContentfulFilmsPage {
        nodes {
          films {
            title
            slug
            media {
              description
              title
              file {
                url
              }
            }
            poster {
              file {
                fileName
                url
              }
              description
            }
          }
        }
      }
    }
  `);
  const films = data.allContentfulFilmsPage.nodes[0].films;

  return (
    <Layout isBlack={true}>
      <FilmsWrapper>
        <Player
          url={films[currentTrailer].slug}
          video={films[currentTrailer].media.file.url}
        />
        <FilmsWrapper.Collection>
          {films.map((film, index) => {
            return (
              <FilmsWrapper.Item
                style={{
                  backgroundImage: `url(${film.poster.file.url})`
                }}
                className={index === currentTrailer ? "active" : ""}
                onMouseEnter={() => showCurrentTrailer(index)}
              >
                <Link to={`/films/${film.slug}`}>
                  <FilmsWrapper.Title>{film.title}</FilmsWrapper.Title>
                </Link>
              </FilmsWrapper.Item>
            );
          })}
        </FilmsWrapper.Collection>
      </FilmsWrapper>
    </Layout>
  );
};

export default Films;
