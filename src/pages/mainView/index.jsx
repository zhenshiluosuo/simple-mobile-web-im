import React , {useState} from 'react';
import { NavLink,Redirect,Route,Switch } from 'react-router-dom'
import Collections from '@pages/collections';
import Friends from '@pages/friends';
import Home from '@pages/home';
import Groups from '@pages/groups';
import styles from './index.less'
import { Menu,Divider } from 'antd';
import {PlusCircleOutlined} from '@ant-design/icons';
import axios from "axios";
import {observer,inject} from 'mobx-react'

axios.defaults.withCredentials = true;
const MainView = (props) => {
    console.log(props);
    const {chatStore,location:{pathname}} = props
    const [current, setcurrent] = useState(pathname.split('/')[2] || 'collections')
    console.log(current);
    const handleClick = (e) => {
        setcurrent(e.key)
        chatStore.changeChatFlag(false)
    }
    return (
        <div className={styles.all}>
            {current !== 'home'&&<div className={styles.header}>
            {current}
            <PlusCircleOutlined className={styles.icon}/>
            </div>
            }
            <div className={styles.content}>
                <Divider className={styles.divider}/>
                <Switch>
                    <Route path='/mainView/collections' component={Collections}></Route>
                    <Route path='/mainView/friends' component={Friends}></Route>
                    <Route path='/mainView/groups' component={Groups}></Route>
                    <Route path='/mainView/home' component={Home}></Route>
                    <Redirect to='/mainView/collections'/>
                </Switch>
            </div>
            <div className={styles.footer}>
                <Divider className={styles.divider}/>
                <Menu mode="horizontal" onClick={handleClick} selectedKeys={current} className={styles.menu} >
                    <Menu.Item key="collections" className={styles.item} >
                <NavLink to='/mainView/collections'>会话</NavLink>
                </Menu.Item>
                <Menu.Item key="friends" className={styles.item}>
                    <NavLink to='/mainView/friends'>好友</NavLink>
                </Menu.Item>
                <Menu.Item key="groups" className={styles.item} >
                    <NavLink to='/mainView/groups'>群组</NavLink>
                </Menu.Item>
                <Menu.Item key="home" className={styles.item}>
                    <NavLink to='/mainView/home'>我</NavLink>
                </Menu.Item>
                </Menu>
            </div>
        </div>
    )
}

export default inject('chatStore')(observer(MainView))
