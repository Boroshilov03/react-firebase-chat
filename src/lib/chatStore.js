import { doc, getDoc } from 'firebase/firestore'
import {create} from 'zustand'
import { db } from './firebase'

export const useChatStore = create((set) => ({
    chatId: null,
    user: null,
    isCurrentUserBlocked: false,
    isReceiverBlocked: false,
    changeChat: (chatId, user)=>{
        const currentUser = userUserStore.getState().currentUser

        //check if current user is blocked
        if (user.blocked.uncludes(currentUser.id)){
            return set({
                chatId: null,
                user: null,
                isCurrentUserBlocked: false,
                isReceiverBlocked: false,
            })
        }
        
        //check if receiver is blocked
    }
}))