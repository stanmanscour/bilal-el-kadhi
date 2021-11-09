import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import gsap from "gsap"

import Layout from "../components/Layout"
import Player from "../components/Player"
import FilmsWrapper from "../styles/pages/films"
import Head from "../components/Head"

const Films = () => {
  const [currentTrailer, setCurrentTrailer] = useState(0)

  const handleHover = (e, index) => {
    setCurrentTrailer(index)

    gsap.to(e.target, {
      duration: 0.4,
      scale: 1.05,
      x: 4,
      skewX: 1,
      ease: "Power3.inOut"
    })
  }

  const handleHoverExit = e => {
    gsap.to(e.target, {
      duration: 0.4,
      scale: 1,
      x: -4,
      skewX: 0,
      ease: "Power3.inOut"
    })
  }

  const data = useStaticQuery(graphql`
    query {
      allContentfulFilmsPage {
        nodes {
          films {
            title
            slug
            trailer {
              file {
                url
              }
            }
            video {
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
  `)
  const films = data.allContentfulFilmsPage.nodes[0].films

  return (
    <Layout isBlack={true}>
      <Head title="Film" />
      <FilmsWrapper>
        <Player
          url={films[currentTrailer].slug}
          video={films[currentTrailer].trailer.file.url}
        />
        <FilmsWrapper.Collection>
          {films.map((film, index) => {
            return (
              <FilmsWrapper.Item
                style={{
                  backgroundImage: `url(${film.poster.file.url})`
                }}
                className={index === currentTrailer ? "active" : ""}
                onMouseEnter={e => handleHover(e, index)}
                onMouseLeave={e => handleHoverExit(e)}
              >
                <Link to={`/films/${film.slug}`}>
                  <FilmsWrapper.Title>{film.title}</FilmsWrapper.Title>
                </Link>
              </FilmsWrapper.Item>
            )
          })}
        </FilmsWrapper.Collection>
      </FilmsWrapper>
    </Layout>
  )
}

export default Films
