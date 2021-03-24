import React,{useEffect} from 'react'
import styles from './index.less';
import { NavLink } from "react-router-dom";
import {observer,inject} from 'mobx-react'

const FriendDesc = (props) => {
    const { name , imgSrc, chatStore} = props

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
        <NavLink to='/mainView/collections'><div className={styles.talk} onClick={() => chatStore.changeChatFlag(true)}>发消息</div></NavLink>
    </div>
}
export default inject('chatStore')(observer(FriendDesc))