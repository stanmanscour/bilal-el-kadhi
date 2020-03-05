import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from "../components/Layout/Layout";
import PrintsWrapper from "../styles/pages/prints";

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
  `);

  const prints = data.allContentfulPrintsPage.nodes[0].medias;

  return (
    <Layout>
      <PrintsWrapper>
        <PrintsWrapper.Collection>
          {prints.map(item => {
            return (
              <PrintsWrapper.Item>
                <AniLink fade to={`/prints/${item.slug}`}>
                  <img src={item.media.file.url} />
                  <PrintsWrapper.ItemName>{item.title}</PrintsWrapper.ItemName>
                </AniLink>
              </PrintsWrapper.Item>
            );
          })}
        </PrintsWrapper.Collection>
      </PrintsWrapper>
    </Layout>
  );
};

export default Prints;
