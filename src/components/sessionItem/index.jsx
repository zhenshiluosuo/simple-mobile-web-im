import React, {memo} from 'react';
import styles from './index.less'

export default memo(function APP(props) {
    const {item} = props;

    const goSession = () => {

    }

    return (
        <div className={styles.collectionsItem} onClick={goSession}>
            <div className={styles.collectionsItemIcon}>
                <img className={styles.collectionsItemIconImg} src={'../../assets/profile/' + item.user.user_profile} alt=""/>
            </div>
            <div className={styles.collectionsItemInfo}>
                <div className={styles.collectionsItemInfoTop}>
                    <span>{item.user.user_name}</span>
                    <span>{item.recent_info.time.hour}:{item.recent_info.time.minute}</span>
                </div>
                <div className={styles.collectionsItemInfoBottom}>
                    {item.recent_info.value.length > 15 ? item.recent_info.value.slice(0,15) + ' ···' : item.recent_info.value}
                </div>
            </div>
            <div className={styles.collectionsItemInfoNum}>
                <div className={styles.collectionsItemInfoNumContainer}>
                    <span>{item.unreadNum > 99 ? '99+' : item.unreadNum}</span>
                </div>
            </div>
        </div>
    )
});
