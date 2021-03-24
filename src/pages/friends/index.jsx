import React,{useState} from 'react';
import Friend from '@components/friendItem'
import FriendDesc from '@components/friendItem/friendDsec'
import styles from './index.less';
import store from '@/store'

export default (props) => {

    const friendInfo = [{
        imgSrc : '../../assets/profile/1.jpg',
        name : 'jack'
    },{
        imgSrc : '../../assets/profile/1.jpg',
        name : 'mary'
    }]
    const [desc, setdesc] = useState(null)
    const handleClick = (item) => {
        store.changefriendDesc(true)
        setdesc(item)
    }
    return (
        store.friendDesc?<FriendDesc {...desc}></FriendDesc>:
        <div className={styles['friend-list']}>{friendInfo.map((item) => {
            return <div onClick={() => handleClick(item)}><Friend {...item} ></Friend></div> 
        })}</div>
        
    )
    
}
