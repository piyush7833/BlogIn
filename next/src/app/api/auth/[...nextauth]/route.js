import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import connect from "@/utilities/db"
import User from "@/models/User"
import bcrypt from "bcryptjs";
const handler=NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.Google_ID,
      clientSecret: process.env.Google_SECRET,
    }),
    CredentialsProvider({
      id:"credentials",
      name:"credentials",
      async authorize(credentials){
        await connect();
        try {
          const user=await User.findOne({
            email:credentials.email,
          });
          if(user){
            //check password
            const verifyPassword=await bcrypt.compare(credentials.password,user.password);
            if(verifyPassword)return user;
            else throw new Error("Wrong Credentials")
          }
          else{
            throw new Error("User not found")
          }
        } catch (error) {
          throw new Error(error.message)
          
        }
      }
    })
  ],
  pages:{
    error:"/dashboard/login"
  }
})

export {handler as GET, handler as POST}  //it is done because we are using get method for getting session and post for authentication