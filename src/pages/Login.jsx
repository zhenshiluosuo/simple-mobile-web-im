
import React, { memo, useState } from 'react';
import { Redirect } from 'react-router-dom';
import '@assets/Login.jpg'
import styles from './Login.less'
import {Button, Input} from 'antd'



export default memo(function APPWrapper() {
    const [username,setusername] = useState('')
    const [password,setpassword] = useState('')
    const [loading,setloading] = useState(false)
    const [pass,setpass] = useState(false)
    const usernameChange = (e) => setusername(e.target.value)
    const passwordChange = (e) => setpassword(e.target.value)
    const login = () => {
      setloading(true)
      setTimeout(() => {setloading(false);setpass(true)},3000)
    }
    return (
      (!pass)?
      (<div className={styles.background}>
        <div className={styles.inputWrapper}>
          <Input placeholder='请输入用户名' allowClear className={styles.input} onChange={usernameChange} value={username}/>
          <Input.Password placeholder="请输入密码" allowClear className={styles.input} onChange={passwordChange} value={password} />
          <Button type="primary" loading={loading} className={styles.button} onClick={login}>登录</Button>
        </div>
      </div>):
      (<Redirect  to="/collect" />)
    );
  });
  