"use client";

import Image from "next/image";
import { useState } from "react";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [creatingUser, setCreatingUser] = useState(false);
    const [userCreated, setUserCreated] = useState(false);
    const [error, setError] = useState(false);

    const submitHandler = async (event) => {
        event.preventDefault();

        const data = {
            email,
            password,
        };

        await fetch("/api/auth/register", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        });

        console.log("register data", data);
    };
    return (
        <section className="mt-8 ">
            <div>
                <h1 className="text-center text-primary text-4xl"> Register</h1>
                {userCreated && (
                    <div className="my-4 text-center">
                        User created.
                        <br />
                        Now you can{" "}
                        <Link className="underline" href={"/login"}>
                            Login &raquo;
                        </Link>
                    </div>
                )}
                {error && (
                    <div className="my-4 text-center">
                        An error has occurred.
                        <br />
                        Please try again later
                    </div>
                )}
                <form onSubmit={submitHandler} className=" block max-w-sm mx-auto">
                    <input
                        type="text"
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={creatingUser}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={creatingUser}
                    />
                    <button className="bg-primary text-white" type="submit" disabled={creatingUser}>
                        Submit
                    </button>
                    <div className="my-4 text-center text-gray-500 "> Or lgoin with Provider </div>
                    <button className=" flex items-center  justify-center gap-6" type="submit">
                        <Image src={"/google.png"} alt="google" width={32} height={32} />
                        <span> Login with google</span>
                    </button>
                </form>
            </div>
        </section>
    );
}
