import React,{useEffect} from 'react'
import styles from './index.less';
import { NavLink } from "react-router-dom";
import store from '@/store'

const FriendDesc = (props) => {
    const { name , imgSrc} = props
    useEffect(() => {
        store.changeFooter(false)
        return () => {
            store.changeFooter(true)
        }
    }, [])
    return <div className={styles.wrapper}>
        <div className={styles.descwrapper}>
            <div className={styles.imgwrapper}>
                <img src={'../'+imgSrc} alt=""/>
            </div>
            <div className={styles.textwrapper}>
                <h1>{name}</h1>
                <span>id: xxx</span><br/>
                <span>地区:xxx</span>
            </div>
        </div>
        <NavLink to='/mainView/collections'><div className={styles.talk} onClick={() => store.changeChatFlag(true)}>发消息</div></NavLink>
    </div>
}
export default FriendDesc