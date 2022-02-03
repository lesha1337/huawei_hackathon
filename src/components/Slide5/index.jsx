import React, { Component } from "react";
import { Parallax } from "react-spring";
import Window from "../features/Window";
import styles from "./styles.module.scss";

export default class Slide5 extends Component {
  render() {
    return (
      <>
        <Parallax.Layer
          offset={4}
          speed={0}
          style={{ backgroundColor: "#dbd3f5" }}
        />

        <Parallax.Layer offset={4.34} speed={0.1} className={styles.windows}>
          <div
            className={styles.window}
            style={{ marginLeft: "2rem", marginTop: "0rem" }}
          >
            <Window />
          </div>
          <div
            className={styles.window}
            style={{ marginLeft: "3rem", marginTop: "-1rem" }}
          >
            <Window />
          </div>
          <div
            className={styles.window}
            style={{ marginLeft: "4rem", marginTop: "-2rem" }}
          >
            <Window />
          </div>
          <div
            className={styles.window}
            style={{ marginLeft: "5rem", marginTop: "-3rem" }}
          >
            <Window>
              <h4>> Целевая аудитория хакатона - выпускники бакалавриата</h4>

              <div className={styles.regLink}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe6-4Z7wqGKZr4G54QAx3Oqi79oAWDFGLYL9zIMh8OWo_LSaw/viewform">
                  <button className="nes-btn">{"Регистрация"}</button>
                </a>
              </div>
            </Window>
          </div>
        </Parallax.Layer>

        <Parallax.Layer offset={4.14} speed={0} className={"defaultTitle"}>
          <h2>{"Напоследок"}</h2>
        </Parallax.Layer>

        <Parallax.Layer offset={4.23} speed={0.15} className={styles.oblako1}>
          <img src="img/oblako1.webp" alt={""} />
        </Parallax.Layer>

        <Parallax.Layer offset={4.16} speed={0.25} className={styles.oblako2}>
          <img src="img/oblako2.webp" alt={""} />
        </Parallax.Layer>

        <Parallax.Layer offset={4.12} speed={0.2} className={styles.sun}>
          <img src="img/sun.webp" alt={""} />
        </Parallax.Layer>

        <Parallax.Layer offset={4.41} speed={0.33} className={styles.oblako3}>
          <img src="img/oblako3.webp" alt={""} />
        </Parallax.Layer>

        <Parallax.Layer offset={4.58} speed={0.33} className={styles.oblako4}>
          <img src="img/oblako4.webp" alt={""} />
        </Parallax.Layer>

        <Parallax.Layer offset={4.73} speed={0.3} className={styles.plane}>
          <img src="img/plane.webp" alt={""} />
        </Parallax.Layer>

        <Parallax.Layer offset={4} speed={0} className={styles.footerContainer}>
          <div className={styles.footer}>
            <p style={{ textAlign: "center" }}>
              Лаборатория Инноватики МФТИ 2019
            </p>
            <img src="img/footer.webp" alt={""} />
          </div>
        </Parallax.Layer>
      </>
    );
  }
}
