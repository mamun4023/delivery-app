"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";

export default function Profile() {
    const session = useSession();
    const { status } = session;

    const userImage = session?.data?.user?.image;

    if (status == "loading") {
        return "Loading...";
    }

    if (status === "unauthenticated") {
        return redirect("/login");
    }

    return (
        <section className="mt-8">
            <h1 className=" text-center text-primary text-4xl mb-4">Profile</h1>

            <form className="max-w-xs mx-auto border">
                <div className=" flex gap-2">
                    <div className=" rounded-lg bg-gray-300 p-2">
                        <Image className=" rounded-lg" src={userImage} width={150} height={150} alt="Avatar" />
                        <button>Change</button>
                    </div>
                    <div className="grow">
                        <input type="text" placeholder="First and last name" />
                    </div>
                </div>
            </form>
        </section>
    );
}
