'use client'
import { User } from "@/core/model/User"
import {  useSession } from "next-auth/react"   

export const UserProvider = () => {
    const { data: session} = useSession() 
    if (!session) return null
    const user = session.user as User || { id: "", name: "", email: "",role: ""};
    return (
        <div className="p-4 border-b border-zinc-700">
        <h2 className="text-lg font-semibold">{user.name}</h2>
        <p className="text-sm text-zinc-400">{user.email}</p> 
        <p className="text-sm text-zinc-400">{user.role ?? ''}</p> 
    </div>
    )
}

