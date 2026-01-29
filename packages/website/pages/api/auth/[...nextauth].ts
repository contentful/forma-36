import tokens from '@contentful/f36-tokens';
import NextAuth, { type NextAuthOptions } from 'next-auth';
import OktaProvider from 'next-auth/providers/okta';
import { getCredentialsProvider } from '../../../utils/auth';

const mainProvider =
  process.env.NODE_ENV === 'development'
    ? getCredentialsProvider()
    : OktaProvider({
      clientId: process.env.OKTA_CLIENT_ID as string,
      clientSecret: process.env.OKTA_SECRET as string,
      issuer: process.env.OKTA_ISSUER as string,
    });

export const authOptions: NextAuthOptions = {
  providers: [mainProvider],
  theme: {
    colorScheme: 'light',
    brandColor: tokens.blue500,
    logo: '/favicon.png',
  },
};

export default NextAuth(authOptions);
