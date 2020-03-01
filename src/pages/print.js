import React from "react";
import Layout from "../components/Layout";
import PrintWrapper from "../styles/pages/print";

const print = {
  name: "Gucci",
  url:
    "https://format-com-cld-res.cloudinary.com/image/private/s--AgKG7X9L--/c_limit,g_center,h_65535,w_700/fl_keep_iptc.progressive,q_95/v1/11d7943ed5789a3cdffd1f4cc1e6b222/Stocksy_txp65fbad21uJ5200_Medium_1959815.jpg?700"
};

const Print = () => {
  return (
    <Layout isShy={true} headerBackUrl="/prints" headerContentTitle="test">
      <PrintWrapper>
        {/* <PrintWrapper.Title>title</PrintWrapper.Title> */}
        <img src={print.url} />
      </PrintWrapper>
    </Layout>
  );
};

export default Print;
