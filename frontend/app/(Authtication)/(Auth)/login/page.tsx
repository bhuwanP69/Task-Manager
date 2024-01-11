'use client'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import AuthForm from "../AuthForm";
import { useState } from "react";

  export default  function SignIn() {
    
    const router = useRouter()
    const [error,setError] = useState('')
    const handleSubmit =  async(e:any,email:any,password:any) =>{
        e.preventDefault()
        setError('')

        const supabase = createClientComponentClient();

        const {data,error} = await supabase.auth.signInWithPassword({
            email,
            password,
            
        })
        if(error){
        setError(error.message)
        }
        if(!error){
            router.push('/dashboard')
        }
    }
     return(
        <main>
            <h2>This is login page</h2>
            <AuthForm handleSubmit={handleSubmit}/>
            {error && 
            <div className="error">
                {error}
            </div>
            }
        </main>

    )
    
}