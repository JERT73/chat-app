import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex mt-3 ml-[5px]'>
        <div className='form-control'>
            <label className='
                label gap-2 cursor-pointer
            '>
                <span className='label-text'>
                    Male
                </span>
                <input type='checkbox' className='
                    checkbox border-blue-100
                '/>
            </label>
        </div>
        <div className='form-control'>
            <label className='
                label gap-2 cursor-pointer
            '>
                <span className='label-text'>
                    Female
                </span>
                <input type='checkbox' className='
                    checkbox border-blue-100
                '/>
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox

// starter code
// import React from 'react'

// const GenderCheckbox = () => {
//   return (
//     <div className='flex mt-3 ml-[5px]'>
//         <div className='form-control'>
//             <label className='
//                 label gap-2 cursor-pointer
//             '>
//                 <span className='label-text'>
//                     Male
//                 </span>
//                 <input type='checkbox' className='
//                     checkbox border-blue-100
//                 '/>
//             </label>
//         </div>
//         <div className='form-control'>
//             <label className='
//                 label gap-2 cursor-pointer
//             '>
//                 <span className='label-text'>
//                     Female
//                 </span>
//                 <input type='checkbox' className='
//                     checkbox border-blue-100
//                 '/>
//             </label>
//         </div>
//     </div>
//   )
// }

// export default GenderCheckbox