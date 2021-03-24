import React,{useState} from 'react';
import Friend from '@components/friendItem'
import FriendDesc from '@components/friendItem/friendDsec'
import styles from './index.less';
import {observer,inject} from 'mobx-react'

export default inject('chatStore')(observer((props) => {

    const friendInfo = [{
        imgSrc : '../../assets/profile/1.jpg',
        name : 'jack'
    },{
        imgSrc : '../../assets/profile/1.jpg',
        name : 'mary'
    }]
    const [flag, setflag] = useState(true)
    const [desc, setdesc] = useState(null)
    const handleClick = (item) => {
        setflag(false)
        setdesc(item)
    }
    return (
        flag?
        <div className={styles['friend-list']}>{friendInfo.map((item) => {
            return <div onClick={() => handleClick(item)}><Friend {...item} ></Friend></div> 
        })}</div>: 
        <FriendDesc {...desc}></FriendDesc>
    )
    
}))
