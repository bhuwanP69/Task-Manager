'use client'
import { useState } from "react"

export default function AuthForm({handleSubmit}:any) {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  return (
    <main className='text-center'>
        <form onSubmit={(e) => handleSubmit(e,email,password)}>
            <div className="email flex gap-5 ">
            <label className=''>Email</label>
            <input type="email" onChange={(e) =>setEmail(e.target.value) } value={email} className=' bg-gray-200 border border-black' />
            </div>
            <div className="password flex gap-5">
            <label className=''>Password:</label>
            <input type="password" onChange={(e) =>setPassword(e.target.value) } value={password} className='bg-gray-200 border border-black' />
            </div>
            <button>Submit</button>
        </form>
    </main>
  )
}
