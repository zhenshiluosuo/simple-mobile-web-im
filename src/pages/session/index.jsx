import React, {memo} from 'react';
import styles from './index.less'

export default memo(function APP(props) {
    const user = {
        user_id: '0000001'
    }
    const profiles = {}
    const messages = [
        {
            id:0,
            user_id: '1237138',
            time: {
                year: 2021,
                month: 3,
                day: 20,
                hour: 16,
                minute: 41,
                second: 0
            },
            value: '狗子晚上好'
        },
        {
            id:1,
            user_id: '1237138',
            time: {
                year: 2021,
                month: 3,
                day: 20,
                hour: 16,
                minute: 41,
                second: 36
            },
            value: '我来上撤硕了'
        },
        {
            id:2,
            user_id: '0000001',
            time: {
                year: 2021,
                month: 3,
                day: 20,
                hour: 16,
                minute: 42,
                second: 7
            },
            value: '？'
        },
        {
            id:3,
            user_id: '1237138',
            time: {
                year: 2021,
                month: 3,
                day: 20,
                hour: 16,
                minute: 42,
                second: 7
            },
            value: '哈哈'
        }
    ]
    return (
        <div className={styles.session}>
            <div className={styles.sessionMessage}>
                <div className={styles.sessionMessageProfile}>

                </div>
                <div className={styles.sessionMessageValue}>

                </div>
            </div>
        </div>
    )
});
