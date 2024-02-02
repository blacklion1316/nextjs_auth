'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
const Role = () => {
    const { data: session } = useSession()

    return (
        <div>
            <h1>Role</h1>
            <p>Role: {session?.user.role}</p>
        </div>
    )
}

export default Role