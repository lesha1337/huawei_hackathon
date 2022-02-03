import React, { Component } from "react";
import styles from "./styles.module.scss";
import { Parallax } from "react-spring";
import classnames from "classnames";

class Slide4 extends Component {
  render() {
    return (
      <>
        <Parallax.Layer
          offset={3}
          speed={0}
          style={{ backgroundColor: "#b5bff4" }}
        />

        <Parallax.Layer
          offset={3.05}
          speed={0}
          className={classnames(styles.slide3Title, "defaultTitle")}
        >
          <h2 className={styles.nonMobile}>Призы (награды)</h2>
          <h2 className={styles.mobile}>Призы</h2>
        </Parallax.Layer>

        <Parallax.Layer offset={3.14} speed={0} className={styles.layer3}>
          <div className={styles.cardWrapper}>
            <div className={styles.card1}>
              <div>
                <p>Первое место:</p>
              </div>
              <div>
                <p>> 200.000 рублей</p>
              </div>
              <div>
                <p>> Huawei P30 Pro каждому участнику команды</p>
              </div>
              <div>
                <p>> Путешествие в Китай</p>
              </div>
            </div>

            <div className={styles.card2}>
              <div>
                <p>Второе место:</p>
              </div>
              <div>
                <p>> 100.000 рублей</p>
              </div>
              <div>
                <p>> Huawei P30 Pro каждому участнику команды</p>
              </div>
              <div>
                <p>> Путешествие в Китай</p>
              </div>
            </div>

            <div className={styles.card3}>
              <div>
                <p>Третье место:</p>
              </div>
              <div>
                <p>> Huawei P30 Pro каждому участнику команды</p>
              </div>
              <div>
                <p>> Путешествие в Китай</p>
              </div>
            </div>
          </div>
        </Parallax.Layer>

        <Parallax.Layer offset={3.11} speed={0.05} className={styles.aircraft}>
          <img src="img/aircraft.webp" alt={""} />
        </Parallax.Layer>

        <Parallax.Layer offset={3.11} speed={0.05} className={styles.cloud1}>
          <img src="img/oblako1.webp" alt={""} />
        </Parallax.Layer>

        <Parallax.Layer offset={3.23} speed={-0.05} className={styles.cloud3}>
          <img src="img/oblako3.webp" alt={""} />
        </Parallax.Layer>

        <Parallax.Layer
          offset={3.76}
          speed={0.05}
          className={styles.aircraft_bottom}
        >
          <img src="img/aircraft.webp" alt={""} />
        </Parallax.Layer>

        <Parallax.Layer
          offset={3.76}
          speed={0.05}
          className={styles.cloud1_bottom}
        >
          <img src="img/oblako1.webp" alt={""} />
        </Parallax.Layer>

        <Parallax.Layer
          offset={3.88}
          speed={-0.05}
          className={styles.cloud3_bottom}
        >
          <img src="img/oblako3.webp" alt={""} />
        </Parallax.Layer>
      </>
    );
  }
}

export default Slide4;
