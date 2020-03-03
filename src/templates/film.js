import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Player from "../components/Player";

const film = {
  name: "Gucci",
  trailer:
    "//videos.ctfassets.net/8zndjzj2z4fu/6tQ4PLMTYF3SfZQErQEorY/3933616ce48d5b3cc7ece4f368ee883c/y2mate.com_-_LAYLOW_-_POIZON_b3LdIMB7RnI_1080p.mp4",
  poster:
    "https://i0.wp.com/www.13or-du-hiphop.fr/wp-content/uploads/2020/02/laylow-trinity-.jpg?resize=320%2C320&ssl=1"
};

export const query = graphql`
  query($slug: String!) {
    contentfulFilm(slug: { eq: $slug }) {
      title
      media {
        file {
          url
        }
      }
    }
  }
`;

const Film = props => {
  const film = props.data.contentfulFilm;
  console.log(film);
  return (
    <Layout
      isShy={true}
      headerBackUrl="/films"
      headerContentTitle={film.title}
      isBlack={true}
    >
      <Player controls video={film.media.file.url} fullscreen={true}></Player>
    </Layout>
  );
};

export default Film;
