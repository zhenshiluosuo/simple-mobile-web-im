import React from 'react';
import Friend from '@components/friendItem'

export default (props) => {
    const friendInfo = [{
        imgSrc : '../../assets/Login.jpg',
        name : 'jack'
    },{
        imgSrc : '../../assets/Login.jpg',
        name : 'mary'
    }]
    return (
        friendInfo.map((item) => {
            return <Friend {...item}></Friend>
        })
    )
}
