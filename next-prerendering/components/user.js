import React from 'react'

function User({ user }) {
  return (
    <div>
        <p>{user.name} - {user.email}</p>
    </div>
  )
}

export default User