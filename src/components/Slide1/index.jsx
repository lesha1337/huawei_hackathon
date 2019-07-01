import React, { Component } from 'react'
import { Parallax } from 'react-spring';
import Window from '../features/Window/index';
import styles from './styles.module.scss';

export default class Slide1 extends Component {
    render() {
        return (
            <>
                <Parallax.Layer offset={0} speed={0} className={'bg_layer'} style={{ background: '#2e1d4b', backgroundSize: 'cover' }} />

                <Parallax.Layer offset={0.45} speed={0.1} className={styles.windows}>
                    <div className={styles.window} style={{marginLeft: '2rem', marginTop: '0rem'}}> <Window/> </div>
                    <div className={styles.window} style={{marginLeft: '3rem', marginTop: '-1rem'}}> <Window/> </div>
                    <div className={styles.window} style={{marginLeft: '4rem', marginTop: '-2rem'}}> <Window/> </div>
                    <div className={styles.window} style={{marginLeft: '5rem', marginTop: '-3rem'}}> 
                        <Window>
                            <h1>IMAGE
                            INPAINTING
                            ONLINE
                            HACKATHON</h1>

                            <a href='#' className={styles.regLink}>
                                <button className="nes-btn">Регистрация</button>
                            </a>

                        </Window> 
                    </div>
                </Parallax.Layer>

                <Parallax.Layer offset={0.18} speed={-0.2} className={styles.comet1}>
                    <img src='img/comet_1.png' alt={''}/>
                </Parallax.Layer>

                <Parallax.Layer offset={0.1} speed={-0.05} className={styles.comet2}>
                    <img src='img/comet_2.png' alt={''}/>
                </Parallax.Layer>

                <Parallax.Layer offset={0.1} speed={-0.1} className={styles.planet10}>
                    <img src='img/planet_10.png' alt={''}/>
                </Parallax.Layer>

                <Parallax.Layer offset={0.2} speed={0.2} className={styles.rocket1}>
                    <img src='img/rocket_1.png' alt={''}/>
                </Parallax.Layer>

                <Parallax.Layer offset={0.4} speed={-0.1} className={styles.planet11}>
                    <img src='img/planet_11.png' alt={''}/>
                </Parallax.Layer>

                <Parallax.Layer offset={0.65} speed={0.1} className={styles.planet12}>
                    <img src='img/planet_12.png' alt={''}/>
                </Parallax.Layer>

                <Parallax.Layer offset={0.72} speed={-0.05} className={styles.rocket2}>
                    <img src='img/rocket_2.png' alt={''}/>
                </Parallax.Layer>

            </>
        )
    }
}
