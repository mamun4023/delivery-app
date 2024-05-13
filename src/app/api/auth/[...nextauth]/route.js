import { User } from "@/models/User";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import nextAuth from "next-auth";

const handler = nextAuth({
    secret: process.env.SECRET,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            id: "credentials",
            credentials: {
                username: { label: "Email", type: "email", placeholder: "test@gmail.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const email = credentials.email;
                const password = credentials.password;

                console.log("password", password);
                console.log("email", email);

                mongoose.connect(process.env.MONGO_URL);
                const user = await User.findOne({ email });
                const passwordOk = user && bcrypt.compareSync(password, user.password);

                // If no error and we have user data, return it
                if (passwordOk && user) {
                    return user;
                }
                // Return null if user data could not be retrieved
                return null;
            },
        }),
    ],
});

export { handler as GET, handler as POST };
