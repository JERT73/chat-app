import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import {TiMessages} from 'react-icons/ti'
import useConversation from '../../zustand/useConversation'

const MessageContainer = () => {
    const {selectedConversation, setSelectedConversation} = useConversation();

    useEffect(() => {
        return () => setSelectedConversation(null);
    }, [setSelectedConversation]);
  return (
    <div className='
        md:min-w-[450px] flex flex-col
    '>
        {selectedConversation ? (
            <>
                <div className='
                    bg-slate-300 px-4 py-2 mb-2
                '>
                    <span className='label-text text-slate-500'>
                        To:
                    </span>
                    &nbsp;
                    <span className='font-bold text-gray-700'>
                        {selectedConversation.fullname}
                    </span>
                </div>
                <Messages/>
                <MessageInput/>
            </> 
        ): <NoChatSelected/>
            
        }

    </div>
  )
}

export default MessageContainer

const NoChatSelected = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>Welcome 👋 Aman Dileep</p>
                <p>Select a chat to start messaging</p>
                <TiMessages classNames="text-3xl md:text-6xl text-center" />
            </div>
        </div>
    )
}

// starter 
// import React from 'react'
// import Messages from './Messages'
// import MessageInput from './MessageInput'
// import {TiMessages} from 'react-icons/ti'

// const MessageContainer = () => {
//     const noChatSelected = false;
//   return (
//     <div className='
//         md:min-w-[450px] flex flex-col
//     '>
//         {!noChatSelected ? (
//             <>
//                 <div className='
//                     bg-slate-300 px-4 py-2 mb-2
//                 '>
//                     <span className='label-text text-slate-500'>
//                         To:
//                     </span>
//                     &nbsp;
//                     <span className='font-bold text-gray-700'>
//                         Samvedya
//                     </span>
//                 </div>
//                 <Messages/>
//                 <MessageInput/>
//             </> 
//         ): <NoChatSelected/>
            
//         }

//     </div>
//   )
// }

// export default MessageContainer

// const NoChatSelected = () => {
//     return (
//         <div className="flex items-center justify-center w-full h-full">
//         <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
//             <p>Welcome 👋 Aman Dileep</p>
//             <p>Select a chat to start messaging</p>
//             <TiMessages classNames="text-3xl md:text-6xl text-center" />
//         </div>
//         </div>
//     )
// }