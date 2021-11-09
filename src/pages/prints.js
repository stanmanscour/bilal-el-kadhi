import React from "react"
import "lazysizes"
import "lazysizes/plugins/attrchange/ls.attrchange"
import { useStaticQuery, graphql } from "gatsby"
// import { Link } from "gatsby"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import Head from "../components/Head"
import Layout from "../components/Layout"
import PrintsWrapper from "../styles/pages/prints"

const Prints = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPrintsPage {
        nodes {
          medias {
            title
            slug
            media {
              file {
                url
                details {
                  image {
                    height
                    width
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const returnRatio = ({ width, height }) => {
    const ratio = width / height
    return {
      width: Math.floor(400 * ratio),
      initialHeight: height,
      initialWidth: width
    }
  }

  // const prints = data.allContentfulPrintsPage.nodes[0].medias
  const formattedPrints = data.allContentfulPrintsPage.nodes[0].medias.map(
    print => {
      return {
        title: print.title,
        slug: print.slug,
        img: {
          ...returnRatio(print.media.file.details.image),
          url: print.media.file.url
        }
      }
    }
  )

  const groupedImages = () => {
    const newArray = []
    while (formattedPrints.length) {
      newArray.push(formattedPrints.splice(0, 3))
    }
    return newArray
  }

  const everyImages = groupedImages().map(imagesGroup => {
    const entireWidth = imagesGroup.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.img.width
    }, 0)
    return imagesGroup.map(item => {
      return {
        ...item,
        img: {
          ...item.img,
          widthPercentage:
            (100 * item.img.width) /
            (entireWidth + 40 * (imagesGroup.length - 1))
        }
      }
    })
  })

  return (
    <Layout>
      <Head title="Prints" />
      <PrintsWrapper>
        {everyImages.map(row => (
          <PrintsWrapper.NewCollection>
            {row.map(print => (
              <PrintsWrapper.Item
                calculatedWidth={print.img.widthPercentage + "%"}
                // style={{ width: `${print.img.widthPercentage}%` }}
              >
                <PrintsWrapper.ItemLink
                  to={`/prints/${print.slug}`}
                  style={{
                    paddingBottom:
                      100 / (print.img.initialWidth / print.img.initialHeight) +
                      "%"
                  }}
                >
                  <picture>
                    <img
                      className="lazyload"
                      alt={print.title}
                      data-src={print.img.url}
                    />
                  </picture>
                  <noscript>
                    <img src={print.img.url} alt={print.title} />
                  </noscript>
                </PrintsWrapper.ItemLink>
              </PrintsWrapper.Item>
            ))}
          </PrintsWrapper.NewCollection>
        ))}

        {/* <PrintsWrapper.Collection>
          {prints.map(item => {
            return (
              <PrintsWrapper.Item>
                <AniLink fade to={`/prints/${item.slug}`}>
                  <img alt={item.title} src={item.media.file.url} />
                </AniLink>
              </PrintsWrapper.Item>
            )
          })}
        </PrintsWrapper.Collection> */}
      </PrintsWrapper>
    </Layout>
  )
}

export default Prints
