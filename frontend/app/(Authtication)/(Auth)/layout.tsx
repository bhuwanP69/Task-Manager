

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default   async function Navbar({children}:any) {
    const supabase  = createServerComponentClient({cookies})
    const {data} = await  supabase.auth.getSession()
    if(data.session){
        redirect('/dashboard')
    }

  return (
    <>
    <div className="navbar flex justify-between  items-center px-10 pt-10 pb-5">

      <div className="left">
        <Link href="/">
          <h1 className="text-3xl">Tasks</h1>
        </Link>
      </div>
      {/* <InputSearch/> */}

      <div className="right flex  gap-10 text-xl">
        <Link href='/login'>
        <button className="bg-logIn px-3 py-1 rounded-lg text-Text hover:opacity-90 transition-all">Log In</button>
        </Link>
        <Link href='/signup'>
        <button className="bg-signUp px-3 py-1 rounded-lg text-Text hover:opacity-90 ">Sign Up</button>
        </Link>
      </div>
    </div>
    {children}
    </>
  )
}
