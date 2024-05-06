import Image from "next/image";
import RightArrow from "../icons/right_arrow";

export default function Hero() {
    return (
        <section className="  grid grid-cols-5 mt-20 ">
            <div className="col-span-2  py-12">
                <h1 className="text-4xl font-semibold leading-normal">
                    Everything <br />
                    is better <br />
                    with a &nbsp;
                    <span className="text-primary">Pizza</span>
                </h1>
                <p className="my-4 text-gray-500">
                    Pizza is the missing piece that makes every day complete, a simple yet delicous
                    joy in life
                </p>
                <div className="flex gap-4">
                    <button className=" flex gap-2 bg-primary text-white px-8 py-2 rounded-full">
                        Order Now
                        <RightArrow />
                    </button>
                    <button className="flex gap-2 border-[2px] border-bg-primary text-primary px-8 py-2 rounded-full">
                        More
                        <RightArrow />
                    </button>
                </div>
            </div>
            <div className="col-span-3 scale-125 relative">
                <Image src="/pizza.png" layout="fill" objectFit="contain" alt="pizza" />
            </div>
        </section>
    );
}