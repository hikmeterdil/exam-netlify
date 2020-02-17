import React from 'react'

export default function DisplayUsers({user, getDetails}) {
  
    return (
        <div className='users' onClick={()=>getDetails(user.login.uuid)}>
            {user.name.first}
        </div>
    )
}
