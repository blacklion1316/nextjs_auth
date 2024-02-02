import GoogleProvider from 'next-auth/providers/google'
import OktaProvider from 'next-auth/providers/okta'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
export default {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }), OktaProvider({
            clientId: process.env.OKTA_CLIENT_ID,
            clientSecret: process.env.OKTA_CLIENT_SECRET,
            issuer: process.env.OKTA_ISSUER
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const user = { id: "42", name: "karan", password: "password", email: "karan@test.com", image: "https://www.gravatar.com/avatar/test.jpg", role: "admin" }
                if (credentials.username === user.name && credentials.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        })

    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
                token.role = user.role
            }
            return token
        },
        async session({ session, token }) {
            session.user.role = token.role
            return session;
        }
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60,

        generateSessionToken: () => {
            return randomUUID?.() ?? randomBytes?.(32).toString('hex');
        },

        updateSession: async (session, token) => {
            session.accessToken = token.accessToken;
            session.user = token.user;
            return Promise.resolve(session);
        },

        createSession: async (user) => {
            return Promise.resolve({
                user: user,
                accessToken: randomUUID?.() ?? randomBytes?.(32).toString('hex')
            });
        },

        deleteSession: async (sessionToken) => {
            return Promise.resolve(sessionToken);
        }
    }


}