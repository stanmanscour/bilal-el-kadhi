import React from "react";
import { Helmet } from "react-helmet";

const Head = ({
  title = "Bilal El Kadhi Studio",
  description = "Bilal El Kadhi Studio 2022 · contact@bilalelkadhi.studio · contact",
}) => {
  return (
    <Helmet>
      <title>{` Bilal El Kadhi Studio `}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      { title !== 'Home' ? <meta name={`robots`} content={`noindex, nofollow`} /> : ''}
    </Helmet>
  );
};

export default Head;
