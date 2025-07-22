import NextAuth from 'next-auth'
// import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import LinkedInProvider from 'next-auth/providers/linkedin';
import GitHubProvider from "next-auth/providers/github";
import mongoose from "mongoose";
import connectDb from "@/db/connectdb";
import User from '@/models/User';

export const authoptions = NextAuth({
  providers: [
    // OAuth authentication providers...
    LinkedInProvider({
        clientId: process.env.LINKEDIN_ID,
        clientSecret: process.env.LINKEDIN_SECRET,
        authorization: {
          params: {
            scope: "r_liteprofile r_emailaddress",
          },
        },
      }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET 
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
      }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider == "github" || account.provider == "google" || account.provider == "linkedin") {
        await connectDb()
        const currentUser = await User.findOne({ email: email })
        if (!currentUser) {
          const newUser = await User.create({
            email: user.email,
            username: user.email.split("@")[0],
          })
          user.name = newUser.username
          console.log(newUser)
          return true
        }
        else{
          user.name = currentUser.username
        }
        return true
      }
    },


    async session({ session, user, token }) {
      const dbUser = await User.findOne({ email: session.user.email })
      console.log(dbUser)
      session.user.name = dbUser.username
      return session
    },
  }
})
export { authoptions as GET, authoptions as POST }