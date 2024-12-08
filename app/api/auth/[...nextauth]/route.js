import nextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import User from '@models/user';
import { connectToDB } from '@utils/database';

const handler = nextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async session({ session }) {
      try {
        // await connectToDB(); // uncomment if some error persists while sign-in

        const sessionUser = await User.findOne({
          email: session.user.email
        });

        session.user.id = sessionUser._id.toString();

        return session;
      } catch (error) {
        console.error("An unexpected error occured in session verification", error);
      }
    },
    async signIn({ profile }) {
      try {
        console.log("In SignIn callback Function")

        await connectToDB();

        // check if a user already exists
        const userExists = await User.findOne({
          email: profile.email
        });

        if (userExists) return true;

        // if not, create a new user
        User.create({
          email: profile.email,
          username: profile.name.replace(' ', '').toLowerCase(),
          image: profile.picture
        });
      } catch (error) {
        console.error('An unexpected error occured during sign-in', error);
        return false;
      }
    }
  }
});

export { handler as GET, handler as POST }
