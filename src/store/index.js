import {observable,action} from 'mobx'
let store = observable({
    chatFlag:false,
    initChatData:{x:2},
    changeInitChatData:action(function(newVal){
        this.initChatData =Object.assign(this.initChatData,newVal)
    }),
    changeChatFlag:action(function(newVal){
            this.chatFlag = newVal
    }),
    footer:true,
    changeFooter:action(function(newVal){
        this.footer = newVal
    }),
    friendDesc:false,
    changefriendDesc:action(function(newVal){
        this.friendDesc = newVal
    })
})

export default store