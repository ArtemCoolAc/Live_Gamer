import styles from '../Styles/MainPage.module.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import React from "react"; // maybe install for docker;
import {SimpleFetcher} from './SimpleFetcher'

export function MainPage() {
    return (
        <div className={styles.gridContainer}>
            <div className={styles.Union}>
                <div className={styles.upper}>
                    <div className={styles.header}>
                        <SimpleFetcher />
                    </div>
                    <div className={styles.menu}></div>
                </div>
            </div>
            <div className={styles.panel}>
                <a href={'#openModal'}>Открыть модальное окно</a>
                <div id={'#openModal'} className={styles.modal}>
                    <div className={styles.modalDialog}>
                        <div className={styles.modalContent}>
                            <div className={styles.modalHeader}>
                                <h3 className={styles.modalTitle}>Название</h3>
                                <a href={'#close'} title={'Close'} className={styles.close}>×</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                {/*<div className={styles.register}>*/}
                {/*    <div className={styles.signIn}></div>*/}
                {/*    <div className={styles.signUp}></div>*/}
                {/*</div>*/}
            <div className={styles.footer}></div>
        </div>
    )
}