import React, { Component } from 'react'
import { Parallax } from 'react-spring';
import Window from '../features/Window/index';
import styles from './styles.module.scss';

export default class Slide5 extends Component {
    render() {
        return (
            <>
                <Parallax.Layer offset={4} speed={0} style={{ backgroundColor: '#dbd3f5' }} />

                <Parallax.Layer offset={4.34} speed={0.1} className={styles.windows}>
                    <div className={styles.window} style={{marginLeft: '2rem', marginTop: '0rem'}}> <Window/> </div>
                    <div className={styles.window} style={{marginLeft: '3rem', marginTop: '-1rem'}}> <Window/> </div>
                    <div className={styles.window} style={{marginLeft: '4rem', marginTop: '-2rem'}}> <Window/> </div>
                    <div className={styles.window} style={{marginLeft: '5rem', marginTop: '-3rem'}}>
                        <Window>
                            <h4>
                            > Целевая аудитория хакатона - выпускники бакалавриата
                            </h4>

                            <div className={styles.regLink}>
                                <a href='#'>
                                    <button className="nes-btn">Регистрация</button>
                                </a>
                            </div>

                        </Window> 
                    </div>
                </Parallax.Layer>

                <Parallax.Layer offset={4.14} speed={0} className={'defaultTitle'}>
                    <h1> Напоследок </h1>
                </Parallax.Layer>

                <Parallax.Layer offset={4.23} speed={0.15} className={styles.oblako1}>
                     <img src='img/oblako1.png' alt={''}/>
                </Parallax.Layer>

                <Parallax.Layer offset={4.16} speed={0.25} className={styles.oblako2}>
                    <img src='img/oblako2.png' alt={''}/>
                </Parallax.Layer>

                <Parallax.Layer offset={4.12} speed={0.2} className={styles.sun}>
                    <img src='img/sun.png' alt={''}/>
                </Parallax.Layer>

                <Parallax.Layer offset={4.41} speed={0.33} className={styles.oblako3}>
                    <img src='img/oblako3.png' alt={''}/>
                </Parallax.Layer>

                <Parallax.Layer offset={4.58} speed={0.33} className={styles.oblako4}>
                    <img src='img/oblako4.png' alt={''}/>
                </Parallax.Layer>

                <Parallax.Layer offset={4.73} speed={0.3} className={styles.plane}>
                    <img src='img/plane.png' alt={''}/>
                </Parallax.Layer>

                <Parallax.Layer offset={4} speed={0} className={styles.footerContainer}>
                    <div className={styles.footer}>
                        <p style={{textAlign: 'center'}}>Кафедра инноватики МФТИ 2019</p>
                        <img src='img/footer.png' alt={''}/>
                    </div>
                </Parallax.Layer>

                {/*<Parallax.Layer offset={4.1} speed={-0.1} className={styles.planet10}>*/}
                {/*    <img src='img/planet_10.png'/>*/}
                {/*</Parallax.Layer>*/}

                {/*<Parallax.Layer offset={4.2} speed={0.2} className={styles.rocket1}>*/}
                {/*    <img src='img/rocket_1.png'/>*/}
                {/*</Parallax.Layer>*/}

                {/*<Parallax.Layer offset={4.4} speed={-0.1} className={styles.planet11}>*/}
                {/*    <img src='img/planet_11.png'/>*/}
                {/*</Parallax.Layer>*/}

                {/*<Parallax.Layer offset={4.65} speed={0.1} className={styles.planet12}>*/}
                {/*    <img src='img/planet_12.png'/>*/}
                {/*</Parallax.Layer>*/}

                {/*<Parallax.Layer offset={4.72} speed={-0.05} className={styles.rocket2}>*/}
                {/*    <img src='img/rocket_2.png'/>*/}
                {/*</Parallax.Layer>*/}

            </>
        )
    }
}
