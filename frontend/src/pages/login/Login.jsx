import React from 'react'

const Login = () => {
  return (
    <div className='
        flex flex-col items-center justify-center min-w-96 mx-auto
    '>
        <div className='
            w-full p-6 rounded-lg shadow-md bg-gray-400 
            bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0
        '>
            <h1 className='
                text-center text-3xl font-semibold text-gray-300
            '>
                Login <span className='
                    text-blue-200
                '>
                    BuzzChat
                </span>
            </h1>
            <form>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>
                            Username
                        </span>
                    </label>
                    <input type='text' placeholder='Enter username'
                        className='
                            w-full input input-bordered h-10
                        '
                    />
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>
                            Password
                        </span>
                    </label>
                    <input type='password' placeholder='Enter password'
                        className='
                            w-full input input-bordered h-10
                        '
                    />
                </div>
                <a href='#' className='
                    hover:underline hover:text-blue-200 mt-3 inline-block
                    pl-2
                '>
                    Don't have an account? Sign up then...
                </a>
                <div>
                    <button className='
                        btn btn-block btn-sm mt-2 hover:bg-blue-200
                        hover:text-gray-700
                    '>
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login

// STARTER
// const Login = () => {
//   return (
//     <div className='
//         flex flex-col items-center justify-center min-w-96 mx-auto
//     '>
//         <div className='
//             w-full p-6 rounded-lg shadow-md bg-gray-400 
//             bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0
//         '>
//             <h1 className='
//                 text-center text-3xl font-semibold text-gray-300
//             '>
//                 Login <span className='
//                     text-blue-200
//                 '>
//                     BuzzChat
//                 </span>
//             </h1>
//             <form>
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>
//                             Username
//                         </span>
//                     </label>
//                     <input type='text' placeholder='Enter username'
//                         className='
//                             w-full input input-bordered h-10
//                         '
//                     />
//                 </div>
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>
//                             Password
//                         </span>
//                     </label>
//                     <input type='password' placeholder='Enter password'
//                         className='
//                             w-full input input-bordered h-10
//                         '
//                     />
//                 </div>
//                 <a href='#' className='
//                     hover:underline hover:text-blue-200 mt-2 inline-block
//                     pl-2
//                 '>
//                     Don't have an account? Sign up then...
//                 </a>
//                 <div>
//                     <button className='
//                         btn btn-block btn-sm mt-2
//                     '>
//                         Login
//                     </button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Login