import React from 'react'
import {BiLogOut} from 'react-icons/bi'
import useLogout from '../../hooks/useLogout'

const LogoutButton = () => {
  const {loading, Logout} = useLogout();

  return (
    <div className='
        mt-auto
    '>
      {!loading ? (
        <BiLogOut className="w-6 h-6 text-blue-200 cursor-pointer"
          onClick={Logout}
        />
      ):
        (
          <span className="loading loading-spinner"></span> 
        )
      }
    </div>
  )
}

export default LogoutButton