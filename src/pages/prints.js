import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout/Layout";
import PrintsWrapper from "../styles/pages/prints";

const prints = [
  {
    name: "test",
    url:
      "https://format-com-cld-res.cloudinary.com/image/private/s--AgKG7X9L--/c_limit,g_center,h_65535,w_700/fl_keep_iptc.progressive,q_95/v1/11d7943ed5789a3cdffd1f4cc1e6b222/Stocksy_txp65fbad21uJ5200_Medium_1959815.jpg?700"
  },
  {
    name: "test",
    url:
      "https://format-com-cld-res.cloudinary.com/image/private/s--j0Snh5dI--/c_limit,g_center,h_65535,w_400/fl_keep_iptc.progressive,q_95/v1/e5cd970048711e5718ea7650e6b041dd/Stocksy_txp65fbad21uJ5200_Medium_1965624.jpg?400"
  },
  {
    name: "test",
    url:
      "https://format-com-cld-res.cloudinary.com/image/private/s--eqHQqUQQ--/c_limit,g_center,h_65535,w_1600/fl_keep_iptc.progressive,q_95/v1/06b2f9fc7a2515f2d49b239b49059c98/Stocksy_txp65fbad21uJ5200_Medium_1959820.jpg?1600"
  },
  {
    name: "test",
    url:
      "https://yard.media/wp-content/uploads/2019/02/PSG-Jordan-YARD-Bilalelkadhi.jpg"
  },
  {
    name: "test",
    url:
      "https://i2.wp.com/www.hypesoul.com/wp-content/uploads/2019/03/5.png?fit=1024%2C768&ssl=1"
  },
  {
    name: "test",
    url:
      "https://format-com-cld-res.cloudinary.com/image/private/s--AgKG7X9L--/c_limit,g_center,h_65535,w_700/fl_keep_iptc.progressive,q_95/v1/11d7943ed5789a3cdffd1f4cc1e6b222/Stocksy_txp65fbad21uJ5200_Medium_1959815.jpg?700"
  },
  {
    name: "test",
    url:
      "https://format-com-cld-res.cloudinary.com/image/private/s--j0Snh5dI--/c_limit,g_center,h_65535,w_400/fl_keep_iptc.progressive,q_95/v1/e5cd970048711e5718ea7650e6b041dd/Stocksy_txp65fbad21uJ5200_Medium_1965624.jpg?400"
  },
  {
    name: "test",
    url:
      "https://format-com-cld-res.cloudinary.com/image/private/s--eqHQqUQQ--/c_limit,g_center,h_65535,w_1600/fl_keep_iptc.progressive,q_95/v1/06b2f9fc7a2515f2d49b239b49059c98/Stocksy_txp65fbad21uJ5200_Medium_1959820.jpg?1600"
  },
  {
    name: "test",
    url:
      "https://yard.media/wp-content/uploads/2019/02/PSG-Jordan-YARD-Bilalelkadhi.jpg"
  },
  {
    name: "test",
    url:
      "https://i2.wp.com/www.hypesoul.com/wp-content/uploads/2019/03/5.png?fit=1024%2C768&ssl=1"
  }
];

const Prints = () => {
  return (
    <Layout>
      <PrintsWrapper>
        <PrintsWrapper.Collection>
          {prints.map(item => {
            return (
              <PrintsWrapper.Item>
                <Link>
                  <img src={item.url} />
                  <PrintsWrapper.ItemName>test</PrintsWrapper.ItemName>
                </Link>
              </PrintsWrapper.Item>
            );
          })}
        </PrintsWrapper.Collection>
      </PrintsWrapper>
    </Layout>
  );
};

export default Prints;
