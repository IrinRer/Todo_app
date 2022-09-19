import React from "react";
import styles from './index.module.scss';

const Input = () => {
    return (
        <input type='text' placeholder='Task description...' className={styles.input}/>
    )
};

export default Input;