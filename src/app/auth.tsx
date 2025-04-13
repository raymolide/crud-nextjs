'use client'
import { signIn, signOut } from "next-auth/react"


export const LoginButton = () => {
    return (
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => signIn()}>
            Login
        </button>
    )
}
export const LogoutButton = () => {
    return (
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => signOut({ callbackUrl: '/' })}>
            Logout
        </button>
    )
} 



