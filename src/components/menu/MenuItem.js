import { useDispatch } from "react-redux";
import { addProduct } from "@/redux/slices/cart";

export default function MenuItem({ data }) {
    const dispatch = useDispatch();

    return (
        <div className="flex flex-wrap flex-row gap-4">
            <div className=" h-90 w-60 bg-gray-200  rounded-lg text-center hover:bg-gray-300 hover:shadow-lg transition-all">
                <img src={data.image} alt="pizza" />
                <div className="p-2">
                    <h4 className=" font-semibold text-xl my-3"> {data.title} </h4>
                    <p className="text-gray-500 text-sm"> {data.desc} </p>
                    <button
                        onClick={() => dispatch(addProduct(data))}
                        className="mt-4 bg-primary text-white rounded-full px-8 py-2"
                    >
                        Add to cart ${data.price}
                    </button>
                </div>
            </div>
        </div>
    );
}
