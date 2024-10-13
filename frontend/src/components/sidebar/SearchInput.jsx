import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useGetConversation from '../../hooks/useGetConversations';
import useConversation from '../../zustand/useConversation';
import toast from 'react-hot-toast';

const SearchInput = () => {
    const [search, setSearch] = useState('');

    const {setSelectedConversation} = useConversation();
    const {conversations} = useGetConversation();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        if (search.length < 3){
            return toast.error('search term should have atleast 3 characters');
        }
        const conversation = conversations.find((c) => c.fullname.toLowerCase().includes(search.toLowerCase()));

        if (conversation){
            setSelectedConversation(conversation);
            setSearch('');
        } else {
            toast.error('No such user found');
        }
    }
  return (
    <form className='
        flex items-center gap-2
    ' onSubmit={handleSubmit}>
        <input type="search" placeholder="Search..." className='
            input input-bordered rounded-full
        '
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit' className='
            btn btn-circle bg-blue-200 text-gray-700
        '>
            <IoSearchSharp className='
                w-6 h-6 outline-none hover:text-blue-200
            '/>
        </button>
    </form>
  )
}

export default SearchInput;

// starter code
// import React from 'react'
// import { IoSearchSharp } from "react-icons/io5";

// const SearchInput = () => {
//   return (
//     <form className='
//         flex items-center gap-2
//     '>
//         <input type="search" placeholder="Search..." className='
//             input input-bordered rounded-full
//         '/>
//         <button type='submit' className='
//             btn btn-circle bg-blue-200 text-gray-700
//         '>
//             <IoSearchSharp className='
//                 w-6 h-6 outline-none hover:text-blue-200
//             '/>
//         </button>
//     </form>
//   )
// }

// export default SearchInput;