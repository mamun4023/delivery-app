import Image from "next/image";

export default function MenuItem() {
    return (
        <div className=" flex flex-wrap flex-row gap-4">
            <div className=" h-90 w-60 bg-gray-200 p-4 rounded-lg text-center">
                <img src="/pizza.png" alt="pizza" />
                <h4 className=" font-semibold text-xl my-3">Pepperoni Pizza</h4>
                <p className="text-gray-500 text-sm"> pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination </p>
                <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">
                    Add to cart $12
                </button>
            </div>
        </div>
    );
}
