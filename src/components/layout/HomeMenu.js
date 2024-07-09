import Image from "next/image";
import MenuItem from '@/components/menu/MenuItem'
import SectionHeaders from "./SectionHeaders";
import Pizza1 from '../../../public/pizza1.jpg'
import Pizza2 from '../../../public/pizza2.jpg'
import Pizza3 from '../../../public/pizza3.jpg'
import Pizza4 from '../../../public/pizza4.jpg'

const MENU_DATA= [
    {
        id : 1,
        title : "Pepperoni Pizza",
        price : 15,
        desc : "pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination",
        image : Pizza1.src
    },
    {
        id : 2,
        title : "Pepperoni Pizza",
        price : 10,
        desc : "pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination",
        image : Pizza2.src
    },
    {
        id : 3,
        title : "Pepperoni Pizza",
        price : 40,
        desc : "pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination",
        image : Pizza3.src
    },
    {
        id : 4,
        title : "Pepperoni Pizza",
        price : 40,
        desc : "pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination",
        image : Pizza4.src
    }
]

console.log(Pizza1)

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
    
                {MENU_DATA.map((item, index)=>(
                   
                        <MenuItem key={index} data = {item}  />
                    
                ))}
            </div>
        </section>
    );
}
