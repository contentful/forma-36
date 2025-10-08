import CredentialsProvider from 'next-auth/providers/credentials';

export const getCredentialsProvider = () =>
  CredentialsProvider({
    name: 'dev',
    credentials: {
      username: {
        label: 'Username',
        type: 'text',
        value: process.env.DEV_AUTH_USERNAME,
      },
      password: {
        label: 'Password',
        type: 'password',
        value: process.env.DEV_AUTH_PASSWORD,
      },
    },
    async authorize(credentials) {
      if (
        credentials?.username === process.env.DEV_AUTH_USERNAME &&
        credentials?.password === process.env.DEV_AUTH_PASSWORD
      ) {
        return { id: '1', name: process.env.DEV_AUTH_USERNAME };
      }

      return null;
    },
  });
