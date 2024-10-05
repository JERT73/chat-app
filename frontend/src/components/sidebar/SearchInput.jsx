import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className='
        flex items-center gap-2
    '>
        <input type="search" placeholder="Search..." className='
            input input-bordered rounded-full
        '/>
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