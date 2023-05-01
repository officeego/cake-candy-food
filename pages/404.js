import React from 'react'
import Link from 'next/link'

import { useEffect } from 'react'
import { useRouter } from 'next/router'


const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() =>{
            router.push('/')
        }, 3000)
    }, []);
  return (
    <div>
      <div className='NotFound'>
        <h1>Ooops ....</h1>
        <h2>That Page Cannot be found</h2>
         <h4>You accidentally reach here by error </h4>
        <p>
            <Link href='/'>
                <a className='backp'>Back Home</a>
            </Link>
        </p>
      </div>
    </div>
  )
}

export default NotFound

