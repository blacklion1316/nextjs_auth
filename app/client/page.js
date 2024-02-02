'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

const client = () => {
    const { data: session, status } = useSession()
    if (status === 'loading') return <div>Loading...</div>
    if (status === 'unauthenticated') return redirect('/api/auth/signin')
    if (session) return <div>Signed in as {console.log(session)}</div>
    return <div>Something went wrong</div>
}

export default client