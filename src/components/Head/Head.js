import React from "react";
import { Helmet } from "react-helmet";

const Head = ({ title, description }) => {
  return (
    <Helmet>
      <title>{` Bilal El Kadhi | ${title} `}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

Head.defaultProps = {
  title: "",
  description: "Website for French-Tunisian photographer Bilal El Kadhi"
};

export default Head;
