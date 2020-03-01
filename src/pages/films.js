import React, { useState } from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Player from "../components/Player";
import FilmsWrapper from "../styles/pages/films";

const films = [
  {
    name: "Gucci",
    trailer:
      "//videos.ctfassets.net/8zndjzj2z4fu/6tQ4PLMTYF3SfZQErQEorY/3933616ce48d5b3cc7ece4f368ee883c/y2mate.com_-_LAYLOW_-_POIZON_b3LdIMB7RnI_1080p.mp4",
    poster:
      "https://i0.wp.com/www.13or-du-hiphop.fr/wp-content/uploads/2020/02/laylow-trinity-.jpg?resize=320%2C320&ssl=1"
  },
  {
    name: "Trinity",
    trailer: "https://www.youtube.com/watch?v=b3LdIMB7RnI",
    poster: "https://intrld.com/wp-content/uploads/2019/07/lomepal.png"
  },
  {
    name: "Megatron",
    trailer: "https://www.youtube.com/watch?v=GReYTgrrdro",
    poster:
      "https://static.booska-p.com/images/news/gradur-est-tr-s-bien-entoure-dans-son-clip-ken-649.jpg"
  },
  {
    name: "Akanzer",
    trailer: "https://www.youtube.com/watch?v=Ta-3VizBGtQ",
    poster:
      "https://cdn.radiofrance.fr/s3/cruiser-production/2018/12/2772ef92-518a-4950-ace5-e972acbb1cf1/801x410_laylow_maladress.jpg"
  },
  {
    name: "Burning Man",
    trailer: "https://www.youtube.com/watch?v=nVy0JdoLILU",
    poster:
      "https://www.thebackpackerz.com/wp-content/uploads/2020/01/maxresdefault-23.jpg"
  }
];

const Films = () => {
  const [currentTrailer, setCurrentTrailer] = useState(0);
  const showCurrentTrailer = arg => {
    setCurrentTrailer(arg);
  };

  return (
    <Layout isBlack={true}>
      <FilmsWrapper>
        <Player video={films[currentTrailer].trailer} />
        <FilmsWrapper.Collection>
          {films.map((film, index) => {
            return (
              <FilmsWrapper.Item
                style={{
                  backgroundImage: `url(${film.poster})`
                }}
                className={index === currentTrailer ? "active" : ""}
                onMouseEnter={() => showCurrentTrailer(index)}
              >
                <Link>
                  <FilmsWrapper.Title>{film.name}</FilmsWrapper.Title>
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
