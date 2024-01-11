import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { Database } from '@/lib/database.types'

export default  async function middleware(req:NextResponse) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient<Database>({req,res}); 

    //refresh session if expired  
    //required for server component
    await supabase.auth.getSession()
    return res

 
}
