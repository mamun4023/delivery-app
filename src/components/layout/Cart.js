import { HiOutlineShoppingCart } from "react-icons/hi";
import {useSelector} from 'react-redux'

export default function Cart(){
    const state = useSelector(s => s.cart);

    console.log("state", state)
    return(
        <div className="relative">
             <span className=" text-center absolute size-6 text-sm  bg-primary rounded-full text-white left-4 -top-2">
                {state?.itemList?.length ?? 0}
             </span>
            <HiOutlineShoppingCart size={30} />
        </div>
    )
}