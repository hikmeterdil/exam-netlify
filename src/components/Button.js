import React from 'react'

export default function Button({getUsers}) {
    return (
        <div>
            <button onClick={getUsers}> Get Users</button>
        </div>
    )
}
