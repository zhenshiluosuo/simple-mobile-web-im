import React,{useEffect} from 'react';
import store from '@/store'

const Chat = (props) => {

    useEffect(() => {
        store.changeFooter(false)
        return () => {
            store.changeFooter(true)
        }
    }, [])
    return <div>
123
    </div>
}
export default Chat