'use client'
import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'

const PrintSession = () => {
    const { data, status } = useSession({
        required: true,
        onUnauthenticated() {
            console.log('onUnauthenticated')
        },
    })


    useEffect(() => {
        console.log('data', data)
        console.log('status', status)
    }, [status, data])
    return (
        <div>PrintSession</div>
    )
}

export default PrintSession