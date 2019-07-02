import React, { Component } from 'react'
import { Parallax } from 'react-spring';
import Window from '../features/Window/index';
import styles from './styles.module.scss';

export default class Slide3 extends Component {
    render() {
        return (
            <>
                <Parallax.Layer offset={2} speed={0} className={'bg_layer'} style={{ backgroundColor: '#a28ee2' }} />

                <Parallax.Layer offset={2.42} speed={0.1} className={styles.windows}>
                    <div className={styles.window} style={{marginLeft: '4rem', marginTop: '0rem'}}> <Window/> </div>
                    <div className={styles.window} style={{marginLeft: '3rem', marginTop: '-1rem'}}> <Window/> </div>
                    <div className={styles.window} style={{marginLeft: '2rem', marginTop: '-2rem'}}> <Window/> </div>
                    <div className={styles.window} style={{marginLeft: '1rem', marginTop: '-3rem'}}>
                        <Window>
                            <h2>Задачи</h2>

                            <h4> > На хакатоне будет
                                поставлена единственная
                                задача - image inpainting.</h4>
                            <br/>
                            <h4>Командам надо предложить алгоритм, который лучше всех восстановит пробелы в изображениях.</h4>

                        </Window> 
                    </div>
                </Parallax.Layer>

                <Parallax.Layer offset={2.18} speed={-0.2} className={styles.rocket3}>
                    <img src='img/rocket3.png' alt={''}/>
                </Parallax.Layer>

                <Parallax.Layer offset={2.45} speed={-0.05} className={styles.comet4}>
                    <img src='img/comet4.png' alt={''}/>
                </Parallax.Layer>

                <Parallax.Layer offset={2.75} speed={0.05} className={styles.rocket5}>
                    <img src='img/rocket5.png' alt={''}/>
                </Parallax.Layer>

                <Parallax.Layer offset={2.19} speed={0.05} className={styles.cloud2}>
                    <img src='img/oblako2.png' alt={''}/>
                </Parallax.Layer>

                <Parallax.Layer offset={2.09} speed={0.05} className={styles.cloud3}>
                    <img src='img/oblako1.png' alt={''}/>
                </Parallax.Layer>

            </>
        )
    }
}
