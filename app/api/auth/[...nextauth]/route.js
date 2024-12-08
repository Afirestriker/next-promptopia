import nextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { connectToDB } from '@utils/database';

const handler = nextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  async session({ session }) {

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

      // if not, create a new user

      return true;
    } catch (error) {
      console.log('An unexpected error occured', error);
      return false;
    }
  }
});

export { handler as GET, handler as POST }
