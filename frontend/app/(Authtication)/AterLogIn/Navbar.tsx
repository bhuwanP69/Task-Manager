import SignOut from "./signOut"
export default function Navbar({user}:any) {
  return (
   <nav>
    <h2>Welcome to the auth</h2>
    <div className="div">
      {user  && <span>Hello,{user.email}</span>}
      <SignOut/>
    </div>

   </nav>
  )
}
