import React from "react";
import styles from "../styles/Proyects.module.css";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className={styles.body}>
      <h3 className={styles.header}>Projects</h3>
      <div className={styles.div}>
        <div className={styles.descr}>
          <h3 className={styles.h3}>HenryShop</h3>
          <p className={styles.p}>
            This is my team project at the SoyHenry bootcamp, We were given the
            task of create a e-commerce that has authentication, authorization,
            panel admin, chance of create upload and delete products, and more
            features.
          </p>
          <div className={styles.tecnologies}></div>
        </div>
        <a target="_blank" href="https://henry-shop.vercel.app/">
          <div className={styles.card}></div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
