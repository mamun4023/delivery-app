"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import Cart from "./Cart";

export default function Header() {
    const session = useSession();
    const status = session?.status;
    let userName = session?.data?.user?.name

    if(userName && userName.includes(" ")){
        userName = userName.split(" ")[0]
    }

   

    return (
        <header className="flex items-center justify-between h-20 sticky top-0 z-10 w-full bg-white">
            <nav className="flex items-center gap-8 text-gray-500 font-semibold">
                <Link href={"/"} className="text-primary font-bold text-2xl">
                    ST PIZZA
                </Link>
                <Link href={"/"}>Home</Link>
                <Link href={"/menu"}>Menu</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/contact"}>Contact</Link>
            </nav>

            <nav className="flex items-center gap-8 text-gray-500 font-semibold">
                {status === "authenticated" && (
                    <>
                    <Link href={'/profile'} >{userName}</Link>
                    <button 
                        onClick={()=> signOut()}
                        className="bg-primary text-white px-8 py-2 rounded-full"
                    >
                        Logout
                    </button>
                    </>
                )}

                {status === 'unauthenticated' && <> 
                    <Link href={"/checkout"} className="">
                        <Cart />
                </Link>
                <Link href={"/login"} className="">
                    Login
                </Link>
                <Link 
                    href={"/register"} 
                    className="bg-primary text-white px-8 py-2 rounded-full"
                >
                    Register
                </Link>
                </>}
            </nav>
        </header>
    );
}


