import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"

 export default async function SignOut(){ 
    const router = useRouter()
    const handleLogOut = async() =>{
        const supabase = createClientComponentClient()
        const {error} = await supabase.auth.signOut()
        router.refresh()
        if(!error){
            router.push('/')
        }
    }
    return(
        <main>
            <button className=" bg-orange-400 p-1 rounded-lg" onClick={handleLogOut}>Log Out</button>
        </main>
    )
}