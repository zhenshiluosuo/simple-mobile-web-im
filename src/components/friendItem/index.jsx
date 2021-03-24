import React from 'react';
import styles from './index.less';

const Friend = (props) => {
    const { name , imgSrc} = props
    
    return <div className={styles.friendWrapper} >
        <div className={styles.imgWrapper}>
            <img src={imgSrc} alt=""/>
        </div>
        <span className={styles.name}>{name}</span>
    </div>
}
export default Friend