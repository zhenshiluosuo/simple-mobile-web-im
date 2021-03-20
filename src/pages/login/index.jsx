
import React, { memo, useState } from 'react';
import styles from './index.less'
import {Button, Input, message} from 'antd'
import md5 from "md5";

export default memo(function APPWrapper(props) {
    const [username,setusername] = useState('')
    const [password,setpassword] = useState('')
    const [loading,setloading] = useState(false)
    const usernameChange = (e) => setusername(e.target.value)
    const passwordChange = (e) => setpassword(e.target.value)
    const login = () => {
      setloading(true)
      setTimeout(() => {
        if(username === 'admin' && password === '123'){
          message.success('This is a success message');
          sessionStorage.setItem('user',username+md5(password))
          setloading(false)
          let redirectUrl = props.location.state ? props.location.state.from.pathname : '/'
          props.history.push(redirectUrl)
        }
        else{
          message.error('This is an error message');
          setloading(false)  
        }
        
      },3000)
    }
    return (
      <div className={styles.background}>
        <h1 className={styles.title}>
          这里是标题
        </h1>
        <div className={styles.inputWrapper}>
          <Input placeholder='邮箱/手机号' allowClear className={styles.input} onChange={usernameChange} value={username}/>
          <Input.Password placeholder="登录密码" allowClear className={styles.input} onChange={passwordChange} value={password} />
          <Button type="primary" loading={loading} className={styles.button} onClick={login}>登录</Button>
        </div>
        <h5 className={styles.footer}>
          这里是尾部
        </h5>
      </div>)
  });
  