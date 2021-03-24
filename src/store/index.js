import {observable,action} from 'mobx'
class ChatStore{
    @observable chatFlag = false;
    @observable selectedKey = '会话';

    @action changeChatFlag(value){
        this.chatFlag = value
    }
    @action changeselectedKey(value){
        this.chatselectedKey = value
    }

}
let chatStore = new ChatStore()
const stores = {
    chatStore
}
export default stores