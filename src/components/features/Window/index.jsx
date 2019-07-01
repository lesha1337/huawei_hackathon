import React, { Component } from 'react';
import styles from './styles.module.scss';

export default class Window extends Component {
    render() {
        return (
            <div className={styles.window}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        <img className={styles.huawei_logo} src="img/huawei_logo.png" alt=""/>
                        <p>HUAWEI MOSCOW</p>
                    </div>

                    <div className={styles.actionButtons}>
                        <div>_</div>
                        <div>o</div>
                        <div>x</div>
                    </div>

                </div>
                <div className={styles.container}>
                    {this.props.children}
                </div>

            </div>
        )
    }
}
