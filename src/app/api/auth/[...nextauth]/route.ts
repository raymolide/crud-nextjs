import Backend from "@/backend"
import { compare } from "bcrypt"
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: '/',  
    
  },
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        username: { label: "email", type: "email", placeholder: "hello@example.com" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) { 
        if (!credentials?.username || !credentials?.password) return null
        
        const user = await Backend.users.getById(credentials.username)
        if (!user) return null

        const isValid = await compare(
          credentials.password,
          user.password
        )
        if (!isValid) return null
        console.log(user)
        return {
          id: user.id || "",
          name: user.name,
          email: user.email,
          role: user.role,
        }
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
           ...session.user,
          id: token.id,
          role: token.role,
        }
      } 
    },
    jwt: async ({ token, user }) => {
      if (user) {
       const u = user as unknown as any
        return {
          ...token,
          id: u.id,
          role: u.role, 
        }
             
      }
      return token
    }
  }

}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }

