import Link from "next/link";

export default function page() {
  return (
   <div className="verify">
    <h2>Thank you  for registering</h2>
    <h3>Check your mail we sent you to mail to conform the user </h3>
    <p>Before logging in, you need to verify your email address.</p>
    <Link href='/login'>
    LogIn Page
    
    </Link>


   </div>
  )
}
