import React from 'react';
import styles from './index.module.scss';

const ClearItem = () => {
    return (
        <button type="button" className={styles.clear}>
        Clear completed
      </button>
    )
};

export default ClearItem;