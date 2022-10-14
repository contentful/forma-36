import tokens from '@contentful/f36-tokens';
import NextAuth, { type NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import OktaProvider from 'next-auth/providers/okta';

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    OktaProvider({
      clientId: process.env.OKTA_CLIENT_ID as string,
      clientSecret: process.env.OKTA_SECRET as string,
      issuer: process.env.OKTA_ISSUER as string,
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
