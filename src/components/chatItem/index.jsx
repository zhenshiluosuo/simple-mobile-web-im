import React,{useEffect} from 'react';
import {observer,inject} from 'mobx-react'
const Chat = (props) => {
    const { chatStore} = props
    return <div>

    </div>
}
export default inject('chatStore')(observer(Chat))