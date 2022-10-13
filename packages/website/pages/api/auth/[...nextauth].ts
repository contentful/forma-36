import tokens from '@contentful/f36-tokens';
import NextAuth, { type NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.NEXTAUTH_SECRET as string,
    }),
    // ...add more providers here
  ],
  theme: {
    colorScheme: 'light',
    brandColor: tokens.blue500,
    logo: '/favicon.png',
  },
};
export default NextAuth(authOptions);
