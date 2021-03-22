import React, {memo} from 'react';
import styles from './index.less'
import SessionItem from '../../components/sessionItem'
export default memo(function APP() {
    const tempInfos = [
        {
            id: 0,
            user: {
                user_id: '1237138',
                user_name: '张顺飞',
                user_profile: '0.jpg',
            },
            recent_info: {
                id: 0,
                time: {
                    year: 2021,
                    month: 3,
                    day: 20,
                    hour: 16,
                    minute: 30,
                    second: 0
                },
                value: '今晚有空吗？？'
            },
            unreadNum: 19
        },
        {
            id: 1,
            user: {
                user_id: '1237138',
                user_name: '小倩姐姐',
                user_profile: '1.jpg',
            },
            recent_info: {
                id: 0,
                time: {
                    year: 2021,
                    month: 3,
                    day: 20,
                    hour: 16,
                    minute: 31,
                    second: 0
                },
                value: '晚上能约你吃个饭吗'
            },
            unreadNum: 3
        },
        {
            id: 2,
            user: {
                user_id: '1237138',
                user_name: '大连JK',
                user_profile: '2.jpg',
            },
            recent_info: {
                id: 0,
                time: {
                    year: 2021,
                    month: 3,
                    day: 20,
                    hour: 16,
                    minute: 32,
                    second: 0
                },
                value: '我现在真的好想你'
            },
            unreadNum: 2
        },
        {
            id: 3,
            user: {
                user_id: '1237138',
                user_name: '可爱多',
                user_profile: '3.jpg',
            },
            recent_info: {
                id: 0,
                time: {
                    year: 2021,
                    month: 3,
                    day: 20,
                    hour: 16,
                    minute: 37,
                    second: 0
                },
                value: '今天累死了，我们领导好烦人啊，我快不行了'
            },
            unreadNum: 3
        },
        {
            id: 4,
            user: {
                user_id: '1237138',
                user_name: '销售部林姐',
                user_profile: '4.jpg',
            },
            recent_info: {
                id: 0,
                time: {
                    year: 2021,
                    month: 3,
                    day: 20,
                    hour: 16,
                    minute: 40,
                    second: 0
                },
                value: '我家今晚没人'
            },
            unreadNum: 3
        },
        {
            id: 5,
            user: {
                user_id: '1237138',
                user_name: '小叶妹妹',
                user_profile: '5.jpg',
            },
            recent_info: {
                id: 0,
                time: {
                    year: 2021,
                    month: 3,
                    day: 20,
                    hour: 16,
                    minute: 41,
                    second: 0
                },
                value: '我可爱的老公在吗'
            },
            unreadNum: 999
        },
        {
            id: 6,
            user: {
                user_id: '1237138',
                user_name: '二表姐',
                user_profile: '6.jpg',
            },
            recent_info: {
                id: 0,
                time: {
                    year: 2021,
                    month: 3,
                    day: 20,
                    hour: 16,
                    minute: 43,
                    second: 0
                },
                value: '好爸爸求你了，上次真是我错了，再给人家一次机会嘛~'
            },
            unreadNum: 107
        },
        {
            id: 7,
            user: {
                user_id: '1237138',
                user_name: '大姨子',
                user_profile: '7.jpg',
            },
            recent_info: {
                id: 0,
                time: {
                    year: 2021,
                    month: 3,
                    day: 20,
                    hour: 16,
                    minute: 45,
                    second: 0
                },
                value: '明天我来找你'
            },
            unreadNum: 7
        },
        {
            id: 8,
            user: {
                user_id: '1237138',
                user_name: '陈可可',
                user_profile: '8.jpg',
            },
            recent_info: {
                id: 0,
                time: {
                    year: 2021,
                    month: 3,
                    day: 20,
                    hour: 16,
                    minute: 45,
                    second: 0
                },
                value: '今天被妈妈骂了，求安慰'
            },
            unreadNum: 3
        }
    ];

    React.useEffect(() => {

    })

    return (
        <div className={styles.collections}>
            {
                tempInfos.map((item, index) => {
                    return (
                        <SessionItem key={index} item={item} />
                    )
                })
            }

        </div>)
});
