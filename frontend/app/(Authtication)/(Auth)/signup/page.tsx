'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import AuthForm from "../AuthForm"
import { useState } from "react"

  export default  function signUpNewUser(){
    const [error,setError] = useState('')
    const router = useRouter()

    const handleSubmit = async (e:any,email:any,password:any) =>{
        setError('')
        const supabase = createClientComponentClient()
        const {data,error} = await supabase.auth.signUp({
            email,
            password,
            options:{
                emailRedirectTo:`http://localhost:3000/dashboard`
            }
        })
        if(error){
            setError(error.message)
        }
        if(!error){
            router.push('/verify')
       }
    } 
    return (
        <main>
            <h1>This is sing up page</h1>
            <AuthForm handleSubmit={handleSubmit}/>
            {error && 
            <div className="error">
                {error}
            </div>
            }
        </main>
    )
}