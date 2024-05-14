"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import Image from "next/image"

export default function Profile(){
    const session = useSession()
    const {status} = session

    const userImage = session?.data?.user?.image

    if(status == 'loading'){
        return "Loading..."
    }

    if(status === 'unauthenticated'){
        return redirect('/login')
    }



    return(
        <section className="mt-8">
            <h1 className=" text-center text-primary text-4xl mb-4" >Profile</h1>

            <form className="max-w-sx mx-auto border">
                <div>
                    <div>
                        <Image src = {userImage} width={64} height={64} alt="Avatar" />
                    </div>
                </div>
            </form>
        
        </section>
    )
}