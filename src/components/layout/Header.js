'use client'


import Link from "next/link";
import {useSession} from 'next-auth/react'


export default function Header() {
    
    const session = useSession();

    console.log("session ", session)

    return (
        <header className="flex items-center justify-between">
            <nav className="flex items-center gap-8 text-gray-500 font-semibold">
                <Link href={"/"} className="text-primary font-bold text-2xl">
                    ST PIZZA
                </Link>
                <Link href={"/"}>Home</Link>
                <Link href={""}>Menu</Link>
                <Link href={""}>About</Link>
                <Link href={""}>Contact</Link>
            </nav>
            <nav className="flex items-center gap-8 text-gray-500 font-semibold">
                <Link href={"/login"} className="">
                    Login
                </Link>
                <Link href={"/register"} className="bg-primary text-white px-8 py-2 rounded-full">
                    Register
                </Link>
            </nav>
        </header>
    );
}
