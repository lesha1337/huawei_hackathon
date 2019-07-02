import React, { Component } from 'react';
import styles from './styles.module.scss';

export default class Header extends Component {
    render() {
        return (
            <>
                <div className={styles.wrapper}>
                    <div className={styles.header}>
                        <a onClick={() => this.props.scrollTo(1)}> Расписание </a>
                        <a onClick={() => this.props.scrollTo(2)}> Задачи </a>
                        <a onClick={() => this.props.scrollTo(3)}> Призы </a>
                        <a onClick={() => this.props.scrollTo(4)}>Регистрация </a>
                    </div>
                </div>
            </>
        )
    }
}
