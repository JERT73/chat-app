import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({conversation, lastIdx}) => {
    const {selectedConversation, setSelectedConversation} = useConversation();

    const isSelected = (selectedConversation?._id === conversation._id);

    const {onlineUsers} = useSocketContext(); 
    const isOnline = onlineUsers.includes(conversation._id);
  return (
    <>
        <div className={`
            flex gap-2 items-center rounded hover:bg-blue-200 px-3 py-3
            cursor-pointer ${isSelected? "bg-blue-600": ""}
        `}
        onClick={() => setSelectedConversation(conversation)}
        >
            <div className={`avatar ${isOnline? 'online': ''}`}>
                <div className="w-10 h-10 rounded-full">
                    <img src={conversation.profilePic} alt='user avatar'/>
                </div>
            </div>
            <div className='
                flex flex-col flex-1 pl-2
            '>
                <div className='
                    flex gap-3 justify-between
                '>
                    <p className='
                        font-bold text-gray-600 flex
                    '>
                        {conversation.fullname}
                    </p>
                    {/* <span className='
                        text-xl
                    '>
                        😃
                    </span> */}
                </div>
            </div>
        </div>
        {!lastIdx ? (
            <div className='divider px-3 my-1'></div>
        ): null}
    </>
  )
}

export default Conversation

// starter code
// import React from 'react'

// const Conversation = () => {
//   return (
//     <>
//         <div className='
//             flex gap-2 items-center rounded hover:bg-blue-200 px-3 py-3
//             cursor-pointer
//         '>
//             <div className="avatar online">
//                 <div className="w-10 h-10 rounded-full">
//                     <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt='user avatar'/>
//                 </div>
//             </div>
//             <div className='
//                 flex flex-col flex-1 pl-2
//             '>
//                 <div className='
//                     flex gap-3 justify-between
//                 '>
//                     <p className='
//                         font-bold text-gray-600
//                     '>
//                         Aman Dileep
//                     </p>
//                     <span className='
//                         text-xl
//                     '>
//                         😃
//                     </span>
//                 </div>
//             </div>
//         </div>
//         <div className='divider px-3 my-1'></div>
//     </>
//   )
// }

// export default Conversation