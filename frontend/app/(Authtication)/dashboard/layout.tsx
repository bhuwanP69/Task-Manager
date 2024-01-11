import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import Navbar from "../AterLogIn/Navbar"

export default  async function DashBoardLayout() {
    const supabase = createServerComponentClient({cookies})
    const {data}  =  await supabase.auth.getSession()
    if(!data.session){
        redirect('/login')
    }

  return (
    <div>
        <Navbar user = {data.session.user}/>
    </div>
  )
}
