import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessage from '../../hooks/useGetMessage'
import MessageSkeletons from '../skeletons/MessageSkeletons'
import useListenMessages from '../../hooks/useListenMessages'

const Messages = () => {
  const {loading, messages} = useGetMessage();
 
  useListenMessages();
  const lastMessageRef = useRef();
  
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({behaviour: "smooth"});
    }, 100);
  }, [messages])
  
  
  return (
    <div className='
        px-4 flex-1 overflow-auto
    '>
        {!loading && messages.length > 0 && messages.map((message) => (
          <div  key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
        {loading && [...Array(4)].map((_, idx) => <MessageSkeletons  key={idx}/> )}
        {!loading && messages.length === 0 && (
          <p className='text-center'> 
            Send a Message to Start a Conversation
          </p>
        )}
    </div>
  )
}

export default Messages

// starter code
// import React from 'react'
// import Message from './Message'

// const Messages = () => {
//   return (
//     <div className='
//         px-4 flex-1 overflow-auto
//     '>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//     </div>
//   )
// }

// export default Messages