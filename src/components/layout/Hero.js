import Image from "next/image";
import RightArrow from "../icons/right_arrow";

export default function Hero() {
    return (
        <section className="  grid grid-cols-5 mt-10 ">
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
                    <button className="flex items-center justify-between gap-2 bg-primary hover:bg-white hover:text-primary text-white px-8 py-3 rounded-full transition-all duration-500 ">
                        <span className="w-[80px]" > Order Now</span> 
                        <RightArrow />
                    </button>
                    <button className="flex items-center justify-between gap-2 border-[2px] border-bg-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full transition-all duration-500 ">
                        <span> More </span>
                        <RightArrow />
                    </button>
                </div>
            </div>
            <div className="col-span-3 ml-10 relative w-full">
                <Image src="/pizza.png" fill  alt="pizza" loading="lazy" />
            </div>
        </section>
    );
}
