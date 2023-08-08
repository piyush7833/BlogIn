"use client" 
import { SessionProvider } from 'next-auth/react'  //we are using this file because if we directly use session provider in layout then we need to use use client there due to which we can't use server side facilities like dynamic meta data or set meta data in any page
import React from 'react'

const AuthProvider = ({children}) => {
  return (
    <div>
      <SessionProvider>
        {children}
      </SessionProvider>
    </div>
  )
}

export default AuthProvider
