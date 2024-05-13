import Image from "next/image";
import MenuItem from '@/components/menu/MenuItem'
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu() {
    return (
        <section className="mt-14 relative">
            <div className=" absolute left-0 right-0 w-full justify-start">
                <div className="h-60 w-40 absolute -left-8 text-left -top-40 -z-10">
                    <Image src="/sallad1.png" alt="salad" layout="fill" objectFit="contain" />
                </div>
                <div className="h-60 w-40 absolute -right-8 -top-20 -z-10">
                    <Image src="/sallad2.png" alt="salad" layout="fill" objectFit="contain"  />
                </div>
            </div>
            <div className="text-center ">

                <SectionHeaders subHeader="Check out" mainHeader="Menu" />
            </div>
            <div className=" mt-6 grid grid-cols-3 gap-6">
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        </section>
    );
}
