import React, {Component} from 'react';
import styles from "./styles.module.scss";
import Card from "../features/Cards";
import {Parallax, ParallaxLayer} from "react-spring";
import classnames from "classnames";


class Slide2 extends Component {
    render() {
        return (
            <>

                <Parallax.Layer offset={1} speed={0} className={'bg_layer'} style={{ backgroundColor: '#6c6e9f', backgroundSize: 'cover' }}/>

                <Parallax.Layer offset={1.1} speed={0} className={classnames(styles.slide3Title, 'defaultTitle')}>
                    <h1>Расписание</h1>
                </Parallax.Layer>

                <Parallax.Layer offset={1.05} speed={0.1} className={styles.windows}>

                        <Card className={styles.card1Container}>
                            <div>
                                <p>Регистрация:</p>
                            </div>
                            <div className={styles.cardText}>
                                <p>29 июня - 18 июля</p>
                            </div>
                        </Card>

                        <Card className={styles.card2Container}>
                            <div>
                                <p>Онлайн этап:</p>
                            </div>
                            <div className={styles.cardText}>
                                <p>18 июля - 18 августа</p>
                            </div>
                        </Card>

                        <Card className={styles.card3Container}>
                            <div>
                                <p>Награждение:</p>
                            </div>
                            <div className={styles.cardText}>
                                <p>20 августа</p>
                            </div>
                        </Card>
                </Parallax.Layer>

                <Parallax.Layer offset={1.10} speed={0.1} className={styles.planet10}>
                    <img src='img/planet_10.png' alt={''}/>
                </Parallax.Layer>

                <Parallax.Layer offset={1.5} speed={0.05} className={styles.comet3}>
                    <img src='img/comet3.png' alt={''}/>
                </Parallax.Layer>

                <Parallax.Layer offset={1.75} speed={-0.08} className={styles.comet5}>
                    <img src='img/comet5.png' alt={''}/>
                </Parallax.Layer>

            </>
        );
    }
}

export default Slide2;
