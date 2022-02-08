import React from "react";
import { Helmet } from "react-helmet";

const Head = ({
  title = "Bilal El Kadhi",
  description = "Website for French-Tunisian photographer Bilal El Kadhi",
}) => {
  return (
    <Helmet>
      <title>{` Bilal El Kadhi Studio `}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Head;
