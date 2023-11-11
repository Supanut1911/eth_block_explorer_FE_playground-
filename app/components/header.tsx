"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Logo from "../../public/assets/logo.png";

const Header = () => {
  const [ethPrice, setEthPrice] = useState("");

  const getEthPrice = async () => {
    const response = await axios.get("http://localhost:4000/getETHprice");
    setEthPrice(response.data.usdPrice);
  };

  useEffect(() => {
    getEthPrice();
  }, []);

  return (
    <section className={styles.header}>
      <section className={`${styles.topHeader}`}>
        ETH price:{"  "}
        <span className={styles.blueText}> ${Number(ethPrice).toFixed(2)}</span>
      </section>
    </section>
  );
};

export default Header;
