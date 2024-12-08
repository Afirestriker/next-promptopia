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
  async session({ session }) {
    const sessionUser = User.findOne({
      email: session.user.email
    });

    session.user.id = sessionUser._id.toString();

    return session;
  },
  async signIn({ profile }) {
    try {
      /**
        Every Next JS route is knwon as a ServerLess Route.
        Which means that this is a lambda function which opens up only when it is called
        So every time it gets called, its need to spinup the server and make a connection to the database.
        This is great so that we don't have to keep our server running.
      */
      await connectToDB();

      // check if a user already exists
      const userExists = await User.findOne({
        email: profile.email
      });

      // if not, create a new user
      if (!userExists) {
        User.create({
          email: profile.email,
          username: profile.name.replace(' ', '').toLowerCase(),
          image: profile.picture
        });
      }

      return true;
    } catch (error) {
      console.log('An unexpected error occured', error);
      return false;
    }
  }
});

export { handler as GET, handler as POST }
